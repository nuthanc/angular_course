// import { Injectable } from "@angular/core";
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

// @Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Big Fat Burger',
      'What else do you need to say?',
      'http://www.pngall.com/wp-content/uploads/2016/05/Burger.png',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
    new Recipe(
      'Chicken Biriyani Recipe',
      'Finger licking delicious',
      'https://recipes.timesofindia.com/thumb/msid-53096628,width-1600,height-900/53096628.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Tomatoes', 2),
        new Ingredient('Tomatoes', 2),
        new Ingredient('Oil', 1),
        new Ingredient('Onion', 2),
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
  // selectedRecipe!: Recipe;

  // selectRecipe(selectedRecipe: Recipe) {}
}
