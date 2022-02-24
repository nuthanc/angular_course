import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipeService.getRecipes().filter((recipe) => recipe.name === params['name'])[0];
      }
    )
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
