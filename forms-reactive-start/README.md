# Reactive Forms

### Reactive Setup

* We need ReactiveFormsModule instead of FormsModule in app.module.ts
* Form is created Programmatically(TS code)
* We need to import FormGroup in App Component
  * FormGroup: Group of controls

### Reactive Creating a Form in Code

* Now in onInit initialize the signupForm by creating a new instance of FormGroup containing an object of FormControls
* Inside FormGroup 1st parameter object, we are creating keys within quotes to ensure that it isn't lost during minification

### Reactive Syncing HTML and Form

* We are using formGroup directive to override Angular's default behaviour of inferring the form(Autocreating the form)
* To sync our form and html, we need to use property binding of [formGroup]="signupForm" to form
  * Note: signupForm is the FormGroup created in TS code
* But along with this, we need bind the inputs as well with formControlName and the value must be the key used in FormGroup object in TS code
* After doing this, we can see Angular classes attached to the inputs

### Reactive Submitting the Form

* Just like Template Driven approach, for submission we are gonna utilize the ngSubmit directive to call our method
* In the method, we can just use the FormGroup property created before

### Reactive Adding Validation

* In TD approach, we added required property to the inputs
* But here since we are syncing our form from TS to template, it doesn't work anymore
* Now, we need to add Validators as the 2nd argument while creating the FormControl
  * We need to put only the reference and not call it
* You can inspect the input classes to check this Validation

### Reactive Getting Access to Controls

* In TD approach, we used Local Reference but here we can use get method of signupForm(FormGroup) to aget access to the controls
  * get takes control name or path to the control
  * path will be the name if there is only 1 level of nesting
* We can add css styles as before

### Reactive Grouping Controls

* To Group, we create another FormGroup in the overall FormGroup and create te objects containing the control
* Similarly, we need to sync in html by structuring(nesting) appropriately and adding formGroupName(value should be same as in TS code) to the div containing the Controls
* For the nested controls, we need to provide the path appropriately in the get method