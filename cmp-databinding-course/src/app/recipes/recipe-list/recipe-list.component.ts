import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
