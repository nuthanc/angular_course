import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import * as RecipesActions from './recipe.actions';

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [],
};

const _recipeReducer = createReducer(
  initialState,
  on(RecipesActions.addRecipe, (state, { recipe }) => ({
    ...state,
    recipes: [...state.recipes, recipe],
  })),
  on(RecipesActions.setRecipes, (state, { recipes }) => ({
    ...state,
    recipes: [...recipes],
  })),
  on(RecipesActions.updateRecipe, (state, action) => {
    return {
      ...state,
      recipes: state.recipes.map((recipe, index) =>
        index === action.index ? { ...action.recipe } : recipe
      ),
    };
  }),
  on(RecipesActions.deleteRecipe, (state, action) => ({
    ...state,
    recipes: state.recipes.filter((_, index) => index !== action.index),
  }))
);

export function recipeReducer(state: State | undefined, action: Action) {
  return _recipeReducer(state, action);
}
