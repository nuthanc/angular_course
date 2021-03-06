# Basics

### Setting up the Application

```sh
ng new basics
# No to Routing and chose CSS
cd basics
npm i bootstrap@3
```
* Inform Angular about Bootstrap in angular.json's architect -> build -> styles

### Creating the Components

```sh
ng g c shopping-list
ng g c header
# Created recipe Component manually

# Author used below for recipes to skip spec file
ng g c recipes --skip-tests true

# To create within recipes
ng g c recipes/recipe-list --skip-tests true
ng g c recipes/recipe-detail --skip-tests true
ng g c recipes/recipe-list/recipe-item --skip-tests true

ng g c shopping-list/shopping-edit --skip-tests true
```

### Using the Components

* Add content to the html of the Components

### Adding a Navigation Bar

* Add bootstrap's navbar in Header Component

### Alternative Non-Collapsable Navigation Bar

```txt
The way we added it, the Navbar will collapse on smaller screens. Since we didn't implement a Hamburger menu, that means that there's no way of accessing our links on smaller screens.

You can either add such a menu on your own (see below), or you replace collapse navbar-collapse  with just navbar-default.

Adding a Hamburger Menu:

Alternatively, if you want to make the navigation bar responsive, please replace these lines in header.component.html:

<div class="navbar-header">
  <a routerLink="/" class="navbar-brand">Recipe Book</a>
</div>
<div class="collapse navbar-collapse">
with these lines:

<div class="navbar-header">
  <button type="button" class="navbar-toggle" (click)="collapsed = !collapsed">
	<span class="icon-bar" *ngFor="let iconBar of [1, 2, 3]"></span>
  </button>
  <a routerLink="/" class="navbar-brand">Recipe Book</a>
</div>
<div class="navbar-collapse" [class.collapse]="collapsed" (window:resize)="collapsed = true">
and add this line to header.component.ts:

collapsed = true;
```

### Creating a Recipe Model

* Create recipe.model.ts in recipes folder

### Adding Content to the Recipe Components

* Open Image in New Tab from Google Images
* Content in recipe-list.component.html

### Outputting a List of Recipes with ngFor

* Author used Property binding for image src

### Displaying Recipe Details

* Add in recipe-detail.component.html

### Working on the Shopping List Component

* Add in shopping-list.component.html

### Creating an Ingredient Model

* Create shared folder and place the ingredient.model.ts file there
  * Because this file is required in both shopping-list and recipes
* TypeScript shortcut for defining and assiging in constructor

### Creating and Outputting the Shopping List

* Add in shopping-list.component.html

### Adding a Shopping  List Edit Section

* Add in shopping-edit.component.html
* I had to add margin-right of 4 px for the buttons for some space whereas Author didn't had to as there was already space

### Wrap Up & Next Steps

* Next Steps of Debugging and Component communication