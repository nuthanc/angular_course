import { createAction, props } from '@ngrx/store';
import { UserModel } from '../user.model';

export const startSignUp = createAction(
  '[Auth] Start SignUp',
  props<{ email: string; password: string }>()
);

export const startLogin = createAction(
  '[Auth] Start Login',
  props<{ email: string; password: string }>()
);

export const storeUser = createAction(
  '[Auth] Store User',
  props<{ user: UserModel }>()
);
