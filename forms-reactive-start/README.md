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

* We are using formGroup directive to override Angular's default behaviour of inferring the form
* To sync our form and html, we need to use property binding of [formGroup]="signupForm" to form
  * Note: signupForm is the FormGroup created in TS code
* But along with this, we need bind the inputs as well with formControlName and the value must be the key used in FormGroup object in TS code
* After doing this, we can see Angular classes attached to the inputs