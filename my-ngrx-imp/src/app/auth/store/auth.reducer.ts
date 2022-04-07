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
  on(AuthActions.storeUser, (state, { user }) => ({
    ...state,
    user,
    isLoggedIn: true
  }))
);

export function authReducer(state: State | undefined, action: Action) {
  return _authReducer(state, action);
}
