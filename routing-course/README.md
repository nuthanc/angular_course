# Routing - Course Project

### Planning the General Structure

* Adding RecipeEdit Component
* ![Routing](src/assets/routing.png)

### Setting Up Routes

* Setting up recipe and shopping-list routes
```sh
# ng generate module app-routing --flat --module=app
ng g m app-routing --flat --module=app

# --flat puts the file in src/app instead of its own folder.
# --module=app tells the CLI to register it in the imports array of the AppModule
```
* Need to add imports and exports for RouterModule in app routing module
* Use of router-outlet in app component's template

### Adding Navigation to the App

* I had changed header template in last lecture itself(routerLink), now just need to remove those methods in Header Component

### Marking Active Routes

* Add routerLinkActive to both the li in header component's template

### Fixing Page Reload Issues

* Author had to add style:"cursor: pointer;" to get that hand pointer but for me it was already there
  * Maybe bootstrap does it for me

### Child Routes Challenge

* I had already implemented this in Setting Up Routes section itself
  * But there I used recipe names, maybe now let's use the index

### Adding Child Routing Together

* Add route for recipe-start in app routing
```sh
ng g c recipes/recipe-start --skip-tests true
```