import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';

import * as fromApp from '../../store/app.reducer';
import * as RecipesActions from './recipe.actions';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Store } from '@ngrx/store';
import {
  withLatestFrom,
  switchMap,
  map,
  catchError,
  tap,
} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';
import { of } from 'rxjs';


@Injectable()
export class RecipeEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>,
    private router: Router
  ) {}

  saveRecipes$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RecipesActions.saveRecipes),
        withLatestFrom(this.store.select('recipes'), this.store.select('auth')), // Auth store select not required
        switchMap(([actionData, recipesState, authState]) => {
          return this.http
            .put(
              'https://my-ngrx-imp-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json/',
              recipesState.recipes,
            )
            .pipe(catchError((error) => this.router.navigate(['/auth'])));
        })
      ),
    { dispatch: false }
  );

  fetchRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipesActions.fetchRecipes),
      withLatestFrom(this.store.select('auth')),// Not required
      switchMap(([_, authState]) => {
        return this.http
          .get<Recipe[]>(
            'https://my-ngrx-imp-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json/',
          )
          .pipe(
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
            }),
            catchError((error) => of(RecipesActions.recipesError()))
          );
      })
    )
  );

  recipesError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RecipesActions.recipesError),
        tap(() => this.router.navigate(['/auth']))
      ),
    { dispatch: false }
  );
}
