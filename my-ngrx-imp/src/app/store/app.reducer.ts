import { ActionReducerMap } from '@ngrx/store';
import * as fromRecipe from '../recipes/store/recipe.reducer';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer'


export interface AppState {
  recipes: fromRecipe.State,
  shoppingList: fromShoppingList.State
}

export const appReducer: ActionReducerMap<AppState> = {
    recipes: fromRecipe.recipeReducer,
    shoppingList: fromShoppingList.shoppingListReducer
}