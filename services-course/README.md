# Services - Course Project

### Introduction

```sh
ng g s shopping-list/shopping-list
```
* Recipes created manually
* Thought of what can be in those services

### Setting up the Services

* Author created recipe.service.ts and shopping-list.service.ts with just their class names

### Managing Recipes in a Recipe Service

* Create recipes array in RecipeService and move the initiliazition from recipe-list to here
* We make the recipes property as Private so that it can't be directly accessed from outside
  * We use a getRecipe method to return this
  * Note: If we return this.recipes in getRecipe, we are passing the same Instance(direct reference) of recipe
  * Therefore we are using splice to return a duplicate copy of the recipes
* We are using providers in the Recipes component

### Using a Service for Cross-Component Communication

* We can take out the series of Input and Output and use RecipeService
* For that, create a property called recipeSelect which of type EventEmitter<Recipe>
  * Note: We are using EventEmitter and not just Recipe property because changing just the Recipe won't notify the other Components relying on this
* With this, we can emit event in the recipe-item and subscribe to it in the recipes component

### Adding the Shopping List Service

* Setup ShoppingListService simliar to RecipeService
* Setting Providers for ShoppingListService in app.module because we would require in Recipe secton as well
* But after adding new ingredient from UI(from shopping-edit component), we don't see the new item

### Using Services for Pushing Data from A to B

* In the previous section, the addition of new item was not working because while getting the Ingredients using getIngredients, we are slicing it, so a different copy of ingredients is sent
* But when addIngredient is called, we are pushing to the original ingredients array and not the copy
* To solve this, there are 2 approaches
  * 1 Sending this.ingredients instead of slice in getIngredients
  * The other is through EventEmitter notifying that there is a new Ingredient
    * ingredientsChanged in ShoppingListService
    * subscribing to it in ShoppingList Component