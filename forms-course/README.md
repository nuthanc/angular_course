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

### Updating existing Items

* Based on editMode, we need to use Add/Edit in the button 
* Add editIngredient in service and call it in onAddItem

### Resetting the Form

* Rename Submit operation in the form of shopping edit component
* Set editMode to false and reset the form

### Allowing the the User to Clear (Cancel) the Form

* Add click listener to Clear button and reset the form and set editMode to false

### Allowing the Deletion of Shopping List Items

* Show Delete button only if it in editMode
* Add deleteIngredient method in the service and clear the form

### Creating the Template for the (Reactive) Recipe Edit Form

* Populate the html in recipe-edit

### Creating the Form For Editing Recipes

* Create recipeForm of type FormGroup in Recipe Edit Component
* Initialize the form whenever route params change

### Syncing HTML with the Form

* Ensure ReactiveFormsModule is added in imports of AppModule else synchronization with form fails
* Add and assign formGroup and formControlName to the form and inputs respectively
* Use ngSubmit for submission