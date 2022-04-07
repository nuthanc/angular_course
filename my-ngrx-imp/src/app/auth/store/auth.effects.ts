import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { environment } from 'src/environments/environment';

import { switchMap, map, tap } from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import { UserModel } from '../user.model';
import { Router } from '@angular/router';

interface SignUpResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

interface LoginResponse extends SignUpResponse {
  kind: string;
  displayName: string;
  registered: boolean;
}

const BASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts`;
const SIGNUP_URL = `${BASE_URL}:signUp?key=${environment.api_key}`;
const LOGIN_URL = `${BASE_URL}:signInWithPassword?key=${environment.api_key}`;

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router
  ) {}

  private setUser(response: SignUpResponse | LoginResponse) {
    const { email, localId, expiresIn, idToken } = response;
    const expiresInMilliSeconds = +expiresIn * 1000;
    const expiryDate = new Date(new Date().getTime() + expiresInMilliSeconds);
    return new UserModel(email, localId, idToken, expiryDate);
  }

  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.startSignUp),
      switchMap((actionData) =>
        this.http.post<SignUpResponse>(SIGNUP_URL, {
          email: actionData.email,
          password: actionData.password,
          returnSecureToken: true,
        })
      ),
      map((response) => {
        console.log(response);
        const user = this.setUser(response);
        return AuthActions.storeUser({ user });
      }),
      tap(() => this.router.navigate(['/']))
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.startLogin),
      switchMap((actionData) => {
        console.log('In login effect');
        return this.http.post<SignUpResponse>(LOGIN_URL, {
          email: actionData.email,
          password: actionData.password,
          returnSecureToken: true,
        });
      }),
      map((response) => {
        console.log(response);
        const user = this.setUser(response);
        return AuthActions.storeUser({ user });
      }),
      tap(() => this.router.navigate(['/']))
    )
  );
}
