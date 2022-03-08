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

### Fixing a Bug

```txt
In the next lecture, we'll add some code to access the controls of our form array:

*ngFor="let hobbyControl of signupForm.get('hobbies').controls; let i = index"

This code will fail as of the latest Angular version.

You can fix it easily though. Outsource the "get the controls" logic into a method of your component code (the .ts file):

getControls() {
  return (<FormArray>this.signupForm.get('hobbies')).controls;
}
In the template, you can then use:

*ngFor="let hobbyControl of getControls(); let i = index"

Alternatively, you can set up a getter and use an alternative type casting syntax:

get controls() {
  return (this.signupForm.get('hobbies') as FormArray).controls;
}
and then in the template:

*ngFor="let hobbyControl of controls; let i = index"

This adjustment is required due to the way TS works and Angular parses your templates (it doesn't understand TS there).
```

### Reactive Array of Form Controls

* For dynamically adding Controls of the same type, we use FormArray
  * FormArray takes an array of FormControls
* To sync in html, we need formArrayName which takes a string(name should be same as given in Component)
* On adding new hobbies, we need to cast it to FormArray to push, otherwise we'll get an error
* Also, we can't loop through hobbies controls in template, we need to do it in TS code
  * Angular doesn't understand TS there
* We can use a getter or normal method to get the controls

### Reactive Creating Custom Validators

* We can add Custom Validators to our controls
* The Validator is a method which takes FormControl as Argument and returns an object whose key is the error and value is a boolean
  * If validation is successful, we need to return null or no return statement
* We need to add this method to the list of validators in Form Control
* Also, we need to bind the value of 'this' to this method because Angular is responsible for calling this method and not the Component
  * Otherwise, this.forbiddenUsernames would be undefined
  * Alternative is use to use Arrow function