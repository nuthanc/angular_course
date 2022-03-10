# Forms - Course Project

### Introduction

* TD forms for Shopping List section

### TD Adding the Shopping List Form

* Add local reference on form and assign ngForm 
* Pass this local reference on ngSubmit
* Don't forget to add controls(ngModel and name) to the inputs

### Adding Validation to the Form

* Add required to name and amount inputs
* Disable Add when it is invalid
* For amount, we can add pattern validator property to check against a regular expression

### Allowing the Selection of Items in the List

* Add click listener for Shopping Items
* Create startedEditing Subject in ShoppingListService for Cross-Component communication
* Call next in shopping list component and subscribe to it in shopping edit component
* Remember to unsubscribe in ngOnDestroy
* Use editMode to check when to add new item or edit an item

### Loading the Shopping List Items into the Form

* Create getIngredient method in Shopping List service so that you can use that within the subscribe method of Shopping Edit Component
* Then use ViewChild to get access of the form and set the name and amount