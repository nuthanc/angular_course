import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit { // Should've used Dynamic Alert Component for Modal
  signUp = false;
  error = ''; // Didn't handle fetching errors

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {}

  toggleSignUp() {
    this.signUp = !this.signUp;
  }

  onAuth(email: string, password: string) {
    if (this.signUp) {
      this.store.dispatch(AuthActions.startSignUp({ email, password }));
    } else {
      this.store.dispatch(AuthActions.startLogin({ email, password }));
    }
  }
}
