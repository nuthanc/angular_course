import { createAction, props } from '@ngrx/store';
import { Recipe } from '../recipe.model';

export const addRecipe = createAction(
  '[Recipe] Add Recipe',
  props<{ recipe: Recipe }>()
);

export const updateRecipe = createAction(
  '[Recipe] Update Recipe',
  props<{ index: number; recipe: Recipe }>()
);

export const deleteRecipe = createAction(
  '[Recipe] Delete Recipe',
  props<{ index: number }>()
);

export const saveRecipe = createAction('[Recipe] Save Recipe');