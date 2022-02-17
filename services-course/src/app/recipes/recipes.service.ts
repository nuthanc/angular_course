import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipesService {
    recipes: Recipe[] = [];
    selectedRecipe!: Recipe;

    selectRecipe(selectedRecipe: Recipe) {}
}