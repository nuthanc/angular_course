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

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        // this.recipe = this.recipeService.getRecipes().filter((recipe) => recipe.name === params['name'])[0];
        const index = params['index'];
        this.recipe = this.recipeService.getRecipes()[index];
      }
    )
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
