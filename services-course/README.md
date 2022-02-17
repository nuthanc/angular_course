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