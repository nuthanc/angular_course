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
* valid property is also available per control(name added to elements) level
* Angular also adds ng-classes like ng-dirty, ng-touched, ng-valid dynamically based on the Actions and Inputs