// import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

// @Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2020/08/31/12/15/meal-5532302_1280.jpg'
    ),
    new Recipe(
      'Chicken Biriyani Recipe',
      'Finger licking delicious',
      'https://recipes.timesofindia.com/thumb/msid-53096628,width-1600,height-900/53096628.jpg'
    ),
  ];

  getRecipes() {
      return this.recipes.slice();
  }
    // selectedRecipe!: Recipe;

    // selectRecipe(selectedRecipe: Recipe) {}
}