import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import * as recipeActions from './recipe.action';

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [
    new Recipe(
      'Big Fat Burger',
      'What else do you need to say?',
      'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__480.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
    new Recipe(
      'Chicken Biriyani Recipe',
      'Finger licking delicious',
      'https://recipes.timesofindia.com/thumb/msid-53096628,width-1600,height-900/53096628.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Tomatoes', 2),
        new Ingredient('Oil', 1),
        new Ingredient('Onion', 2),
      ]
    ),
  ],
};

const _recipeReducer = createReducer(
  initialState,
  on(recipeActions.addRecipe, (state, { recipe }) => ({
    ...state,
    recipes: [...state.recipes, recipe],
  })),
  on(recipeActions.updateRecipe, (state, action) => {
    return {
      ...state,
      recipes: state.recipes.map((recipe, index) =>
        index === action.index ? { ...action.recipe } : recipe
      ),
    };
  }),
  on(recipeActions.deleteRecipe, (state, action) => ({
    ...state,
    recipes: state.recipes.filter((_, index) => index !== action.index),
  }))
);

export function recipeReducer(state: State | undefined, action: Action) {
  return _recipeReducer(state, action);
}
