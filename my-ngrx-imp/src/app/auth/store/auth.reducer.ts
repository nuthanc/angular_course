import { Action, createReducer, on } from '@ngrx/store';
import { UserModel } from '../user.model';
import * as AuthActions from './auth.actions';
export interface State {
  user: UserModel | null; // Can just be user: UserModel(Author used just User)
  isLoggedIn: boolean;
  // Missing state variables for authError and loading(To show Loading spinner or content)
}

const initialState: State = {
  user: null,
  isLoggedIn: false,
};

const _authReducer = createReducer(
  initialState,
  on(AuthActions.storeUser, (state, { user }) => {
    return {
    ...state,
    user,
    isLoggedIn: true,
  }}),
  on(AuthActions.startLogout, (state) => ({
    ...state,
    user: null,
    isLoggedIn: false,
  }))
  // Missing authenticateSuccess and authenticateFail on blocks
);

export function authReducer(state: State | undefined, action: Action) {
  return _authReducer(state, action);
}
