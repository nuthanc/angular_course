import { createReducer, on } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';
import * as slActions from './shopping-list.action';

export interface State {
  ingredients: Ingredient[];
  editMode: boolean;
  editedItemIndex: number;
}

const initialState: State = {
  ingredients: [new Ingredient('Apples', 15), new Ingredient('Tomatoes', 10)],
  editMode: false,
  editedItemIndex: -1,
};

export const shoppingListReducer = createReducer(
  initialState,
  on(slActions.addIngredient, (state, { ingredient }) => ({
    ...state,
    ingredients: [...state.ingredients, ingredient],
  })),
  on(slActions.addIngredients, (state, { ingredients }) => ({
    ...state,
    ingredients: [...state.ingredients, ...ingredients],
  })),
  on(slActions.updateIngredient, (state, action) => {
    const ingredients = state.ingredients.map((ingredient, index) =>
      index === state.editedItemIndex ? action.ingredient : ingredient
    );
    return {
      ...state,
      editMode: false,
      editedItemIndex: -1,
      ingredients: ingredients,
    };
  }),
  on(slActions.deleteIngredient, (state) => {
    const ingredients = state.ingredients.filter(
      (_, index) => index !== state.editedItemIndex
    );
    return {
      ...state,
      editMode: false,
      editedItemIndex: -1,
      ingredients: ingredients,
    };
  }),
  on(slActions.startEditingIngredient, (state, action) => ({
    ...state,
    editMode: true,
    editedItemIndex: action.index,
  }))
);
