# Components and Databinding - Course Project

### Adding Navigation with Event Binding and ngIf

* Used @Output and EventEmitter to pass data from Header to App
* In App Component, the property is set to the passed value which determines the loadedFeature

### Passing Recipe Data with Property Binding

* Use Input and Property Binding to get the data from recipe-list to recipe-item

### Passing Data with Event and Property Binding

* Author used recipeWasSelected event in recipe-list for recipe-item, but I used click event directly which led to lesser code
* Components modified are recipe-list, recipe-item, recipes and recipe-detail

### Allowing the User to add Ingredient to the Shopping List

* Using Local references and passing them in Events or using ViewChild to get its value without passing in the method
* Components changed: ShoppingEdit and ShoppingList