import { Action, createReducer, on } from '@ngrx/store';
import { UserModel } from '../user.model';
import * as AuthActions from './auth.actions';
export interface State {
  user: UserModel | null;
  isLoggedIn: boolean;
}

const initialState: State = {
  user: null,
  isLoggedIn: false,
};

const _authReducer = createReducer(
  initialState,
  on(AuthActions.storeUser, (state, { user }) => {
    // console.log(user, state.user);
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
);

export function authReducer(state: State | undefined, action: Action) {
  return _authReducer(state, action);
}
