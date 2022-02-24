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