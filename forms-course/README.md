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

### Fixing a Bug

```txt
In the next lecture, we'll add some code to access the controls of our form array:

*ngFor="let ingredientCtrl of recipeForm.get('ingredients').controls; let i = index"

This code will fail with the latest Angular version.

You can fix it easily though. Outsource the "get the controls" logic into a getter of your component code (the .ts file):

get controls() { // a getter!
  return (<FormArray>this.recipeForm.get('ingredients')).controls;
}
In the template, you can then use:

*ngFor="let ingredientCtrl of controls; let i = index"

This adjustment is required due to the way TS works and Angular parses your templates (it doesn't understand TS there).
```

### Adding Ingredient Controls to a Form Array

* We need to create FormArray for ingredients
* And while pushing the ingredients we need to create FormGroup as there are name and amount
* In template, we need to add formArrayName, formGroupName and formControlName
* We need to use recipeIngredientControls getter as Angular cannot understand TS

### Adding new Ingredient Controls

* Place button to add ingredient and add a click listener
  * Make the type as button or it will submit the form as it is at the end
* Then in onAddIngredient push the FormGroup to the FormArray

### Validating User Input

* Add Validators in FormControl
* Disable the Save button if the form is invalid
* Mark invalid inputs with red border in css

### Submitting the Recipe Edit Form

* Add addRecipe and updateRecipe in RecipeService
* Call the above based on editMode
* In addRecipe and updateRecipe, after making the change, we need emit a Subject and subscribe to it in Recipe List
* Because in getRecipes, we are using slicing so it is a different copy

### Adding a Delete and Clear (Cancel) Functionality

* Add deleteRecipe in RecipeService and call it in Recipe Detail on clicking the delete button
* For cancel and submit, navigate one directory up using Router