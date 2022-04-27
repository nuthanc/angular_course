import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { environment } from 'src/environments/environment';

import { switchMap, map, tap, withLatestFrom } from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import { UserModel } from '../user.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';

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
  timeoutId: null | ReturnType<typeof setTimeout> = null;
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}

  private storeUser(response: SignUpResponse | LoginResponse) {
    const { email, localId, expiresIn, idToken } = response;
    const expiresInMilliSeconds = +expiresIn * 1000;
    const expiryDate = new Date(new Date().getTime() + expiresInMilliSeconds);
    const user = new UserModel(email, localId, idToken, expiryDate);
    this.timeoutId = setTimeout(() => {
      this.store.dispatch(AuthActions.startLogout());
    }, expiresInMilliSeconds);
    return AuthActions.storeUser({ user });
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
        return this.storeUser(response);
      })
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.startLogin),
      switchMap((actionData) => {
        return this.http.post<LoginResponse>(LOGIN_URL, {
          email: actionData.email,
          password: actionData.password,
          returnSecureToken: true,
        });
      }),
      map((response) => {
        return this.storeUser(response);
      })
    )
  );

  autoLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.autoLogin),
      map(() => {
        const authString = localStorage.getItem('auth');
        if (authString) {
          const authState = JSON.parse(authString);
          const { email, id, token, expiryDate } = authState.user;
          const user = new UserModel(email, id, token, expiryDate);
          return AuthActions.storeUser({ user });
        } else {
          return AuthActions.startLogout();
        }
      })
    )
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.startLogout),
        tap(() => {
          if (this.timeoutId) {
            clearTimeout(this.timeoutId);
          }
          localStorage.removeItem('auth');
          this.router.navigate(['/auth']);
        })
      ),
    { dispatch: false }
  );

  storeUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.storeUser),
        withLatestFrom(this.store.select('auth')),
        map(([_, authState]) => {
          if (authState.isLoggedIn) {
            localStorage.setItem('auth', JSON.stringify(authState));
          }
        }),
        // tap(() => this.router.navigate(['/']))
      ),
    { dispatch: false }
  );
}
