import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserModel } from './user.model';

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

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  signUp = false;
  error = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  toggleSignUp() {
    this.signUp = !this.signUp;
  }

  private setUser(response: SignUpResponse | LoginResponse) {
    const { email, localId, expiresIn } = response;
    const expiresInMilliSeconds = +expiresIn * 1000;
    const expiryDate = new Date(new Date().getTime() + expiresInMilliSeconds);
    const user = new UserModel(email, localId, expiryDate);
    console.log(user);
  }

  private handleAuth(email: string, password: string, url: string) {
    this.http
      .post<SignUpResponse | LoginResponse>(url, {
        email,
        password,
        returnSecureToken: true,
      })
      .subscribe({
        next: (response) => {
          this.setUser(response);
          this.error = '';
          this.router.navigate(['/']);
        },
        error: (error) => (this.error = error.error.error.message),
      });
  }

  onAuth(email: string, password: string) {
    const BASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts`;
    let url;
    if (this.signUp) {
      url = `${BASE_URL}:signUp?key=${environment.api_key}`;
    } else {
      url = `${BASE_URL}:signInWithPassword?key=${environment.api_key}`;
    }
    this.handleAuth(email, password, url);
  }
}
