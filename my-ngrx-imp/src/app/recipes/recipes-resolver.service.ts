import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { take, map, switchMap } from 'rxjs/operators';
import * as fromApp from '../store/app.reducer';
import * as RecipeActions from '../recipes/store/recipe.action';
import { Recipe } from './recipe.model';
import { Actions, ofType } from '@ngrx/effects';

interface ResolverResponseData {
  recipes: Recipe[];
}

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<ResolverResponseData> {
  constructor(
    private store: Store<fromApp.AppState>,
    private actions$: Actions
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<ResolverResponseData>
    | Promise<ResolverResponseData>
    | ResolverResponseData {
    return this.store.select('recipes').pipe(
      take(1),
      map((recipesState) => recipesState.recipes),
      switchMap((recipes) => {
        if (recipes.length) {
          return of({ recipes });
        } else {
          this.store.dispatch(RecipeActions.fetchRecipes());
          return this.actions$.pipe(ofType(RecipeActions.setRecipes), take(1));
        }
      })
    );
  }
}
