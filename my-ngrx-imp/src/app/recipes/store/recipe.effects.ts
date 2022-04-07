import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromApp from '../../store/app.reducer';
import * as RecipesActions from './recipe.actions';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { withLatestFrom, switchMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';

@Injectable()
export class RecipeEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}

  saveRecipes$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RecipesActions.saveRecipes),
        withLatestFrom(this.store.select('recipes')),
        switchMap(([actionData, recipesState]) => {
          return this.http.put(
            'https://my-ngrx-imp-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json/',
            recipesState.recipes
          );
        })
      ),
    { dispatch: false }
  );

  fetchRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipesActions.fetchRecipes),
      withLatestFrom(this.store.select('auth')),
      switchMap(([_, authState]) => {
        let params;
        if (authState.user) {
          params = new HttpParams().set('auth', authState.user.token);
        }
        return this.http.get<Recipe[]>(
          'https://my-ngrx-imp-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json/',
          { params: params }
        );
      }),
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      map((recipes) => {
        return RecipesActions.setRecipes({ recipes });
      })
    )
  );
}
