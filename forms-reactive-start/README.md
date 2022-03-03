# Reactive Forms

### Reactive Setup

* We need ReactiveFormsModule instead of FormsModule in app.module.ts
* Form is created Programmatically(TS code)
* We need to import FormGroup in App Component
  * FormGroup: Group of controls

### Reactive Creating a Form in Code

* Now in onInit initialize the signupForm by creating a new instance of FormGroup containing an object of FormControls
* Inside FormGroup 1st parameter object, we are creating keys within quotes to ensure that it isn't lost during minification