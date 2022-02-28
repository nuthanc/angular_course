# Template Driven Form

### An Example Form

* Notice that this form doesn't have action and method because we want Angular to handle this

### TD Creating the Form and Registering the Controls

* By importing FormsModule in app module(by default it should be there) already puts the features required for TD Form
* Angular detects the 'form' element in the template
  * This acts as a selector for some directive to generate the JS representation of the form
* But to get control(representation of it in JS) of it, we need to add just **'ngModel'** and **'name'** attribute
  * ngModel without property and event binding
  * Angular not doing it automatically because you don't want every input as control(key in JS form object)
  * Submitted value should be different
  * Or there are some complex inputs(which are not recognizable)