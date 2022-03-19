import { createAction, props } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';

export const addIngredient = createAction(
  '[Ingredient] Add Ingredient',
  props<{ ingredient: Ingredient }>()
);

export const updateIngredient = createAction(
  '[Ingredient] Update Ingredient',
  props<{ ingredient: Ingredient }>()
);

export const deleteIngredient = createAction(
  '[Ingredient] Delete Ingredient',
);

export const addIngredients = createAction(
  '[Ingredient] Add Ingredients',
  props<{ ingredients: Ingredient[] }>()
);

export const startEditingIngredient = createAction(
  '[Recipe] Start Editing Ingredient',
  props<{ index: number }>()
);