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

### TD Submitting and Using the Form

* Use of ngSubmit event listener in form, Local Reference and assign ngForm
* There is a builtin Submit event when a button of type submit is clicked in the form
* Angular takes advantage of this and gives us ngSubmit Directive
  * ngSubmit gives us only one Event we can listen to
* Place Localreference on the Form element and set it to ngForm
  * form element is kind of a selector for a directive built into Angular which will create this js object(ngForm) automatically and it will expose some data so that we can fetch on the form element

### TD Understanding Form State

* We can console log the form of type NgForm and check its properties
* dirty: If we changed something
* touched: If we touched something
* And a whole lot of other properties

### TD Accessing the Form with @ViewChild

* Since we are placing a Local reference on the form, we can also access it via ViewChild
* It's not ElementRef now but ngForm object because the Local Reference is assigned ngForm value
* This is helpful when we want to access the form values even before we submit

### TD Adding Validation to check User Input

* We can add 'required' html attribute to input elements. This also lets Angular know about it(based on selector for a directive) and configures the form(valid or invalid) 
* For email, we can add required and email(directive) to the input
* Based on this, we can check the valid property of ngForm for validity
* valid property is also available per control(name and ngModel added to elements) level
* Angular also adds ng-classes like ng-dirty, ng-touched, ng-valid dynamically based on the Actions and Inputs

### Built-in Validators & Using HTML5 Validation

```txt
Which Validators do ship with Angular? 

Check out the Validators class: https://angular.io/api/forms/Validators - these are all built-in validators, though that are the methods which actually get executed (and which you later can add when using the reactive approach).

For the template-driven approach, you need the directives. You can find out their names, by searching for "validator" in the official docs: https://angular.io/api?type=directive - everything marked with "D" is a directive and can be added to your template.

Additionally, you might also want to enable HTML5 validation (by default, Angular disables it). You can do so by adding the ngNativeValidate  to a control in your template.
```

### TD Using the Form State

* For the submit button, we can disabled property binding and use Local Reference f's invalid property or valid
* Then in css, we can add styles to inputs with ng-invalid and ng-touched classes

### TD Outputting Validation Error Messages

* For getting access to the individual controls, we can add a Local Reference and assign ngModel
  * This is similar to what we did to form(Form Directive of Angular does this)
  * ngModel exposes some additional info about the control it creates by accessing ngModel

### TD Set Default Values with ngModel Property Binding

* For providing default values, we can add Property Binding to ngModel and provide a value
* This will add value to the control in the background by Angular

### TD Using ngModel with Two-Way-Binding

* For instantly reacting to any changes, we can add 2 way Binding to ngModel
* So with ngModel
  * With no binding: Registering Input as control
  * One way binding: Default values to control
  * Two way binding: Output or Do anything with the value

### TD Grouping Form Controls

* If we want to group username and email which are in user-data div, we can add ngModelGroup property binding to the div to group them to say userData
* The ngForm's value will have userData object and that would contain username and email
* Similary the ngForm's controls would have userData key along with valid, invalid and other properties
* Also the div would have the ng-classes like ng-dirty, ng-touched and ng-valid
* Also we can use LocalReference to assign ngModelGroup and validate within the form

### TD Handling Radio Buttons

* Add genders in App Component and render it in Template