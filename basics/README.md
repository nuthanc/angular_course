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

* 