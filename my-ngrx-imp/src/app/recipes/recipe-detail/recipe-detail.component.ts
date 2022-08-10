import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Recipe } from '../recipe.model';
import * as fromApp from '../../store/app.reducer';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import * as RecipesActions from '../store/recipe.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}
  ngOnInit(): void {
    // Could've used recipe as an Observable with async pipe
    this.route.params.subscribe((params: Params) => { // Should've piped here
      this.id = +params['id']; // pluck rxjs operator could've been used
      this.store // And switchMap
        .select('recipes')
        .pipe(map((recipeState) => recipeState.recipes))
        .subscribe((recipes) => {
          this.recipe = recipes[this.id];
        });
    });
  }

  onAddToShoppingList() {
    this.store.dispatch(
      ShoppingListActions.addIngredients({
        ingredients: this.recipe.ingredients,
      })
    );
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteRecipe() {
    this.store.dispatch(RecipesActions.deleteRecipe({ index: this.id }));
    this.router.navigate(['/recipes']);
  }
}
