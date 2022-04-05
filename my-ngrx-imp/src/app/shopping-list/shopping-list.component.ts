import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as ShoppingListActions from './store/shopping-list.actions';
// import { RecipeService } from '../recipes/recipe.service';
import { Ingredient } from '../shared/ingredient.model';
// import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients!: Ingredient[];
  private subscription!: Subscription;

  // constructor(private shoppingListService: ShoppingListService) {}
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    // this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.store
      .select('shoppingList')
      .pipe(map((slState) => slState.ingredients))
      .subscribe((ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onEditItem(index: number) {
    // this.shoppingListService.startedEditing.next(index);
    this.store.dispatch(ShoppingListActions.startEditingIngredient({ index }));
  }
}
