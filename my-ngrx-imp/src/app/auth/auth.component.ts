import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';

// interface SignUpResponse {
//   idToken: string;
//   email: string;
//   refreshToken: string;
//   expiresIn: string;
//   localId: string;
// }
//
// interface LoginResponse extends SignUpResponse {
//   kind: string;
//   displayName: string;
//   registered: boolean;
// }

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  signUp = false;
  error = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {}

  toggleSignUp() {
    this.signUp = !this.signUp;
  }

  // private setUser(response: SignUpResponse | LoginResponse) {
  //   const { email, localId, expiresIn, idToken } = response;
  //   const expiresInMilliSeconds = +expiresIn * 1000;
  //   const expiryDate = new Date(new Date().getTime() + expiresInMilliSeconds);
  //   const user = new UserModel(email, localId, idToken,expiryDate);
  //   console.log(user);
  // }

  // private handleAuth(email: string, password: string, url: string) {
  //   this.http
  //     .post<SignUpResponse | LoginResponse>(url, {
  //       email,
  //       password,
  //       returnSecureToken: true,
  //     })
  //     .subscribe({
  //       next: (response) => {
  //         this.setUser(response);
  //         this.error = '';
  //         this.router.navigate(['/']);
  //       },
  //       error: (error) => (this.error = error.error.error.message),
  //     });
  // }

  onAuth(email: string, password: string) {
    if (this.signUp) {
      this.store.dispatch(AuthActions.startSignUp({ email, password}));
    } else {
      this.store.dispatch(AuthActions.startLogin({ email, password }));
    }
  }
}
