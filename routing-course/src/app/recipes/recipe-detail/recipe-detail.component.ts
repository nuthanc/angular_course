import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe!: Recipe;

  // My Implementation
  // constructor(
  //   private shoppingListService: ShoppingListService
  // ) {}

  // onAddToShoppingList(ingredients: Ingredient[]) {
  //   for (let ingredient of ingredients) {
  //     this.shoppingListService.addIngredient(ingredient); // Lot of events are emitted from this
  //   }
  // }
  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {}

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
