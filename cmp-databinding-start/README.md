### Splitting Apps into Components

* Checkout this starter folder cmp-databinding-start 
* Now, everything is in the app component
* Let's move it to Other Components
```sh
ng g c cockpit --skip-tests true
ng g c server-element --skip-tests true
```

### Property & Event Binding Overview

* Property & Event Binding can be used in
  * HTML Elements: Native Properties & Events
  * Directives: Custom Properties & Events
  * Components: Custom Properties & Events

### Binding to Custom Properties

* Define element property in server-element Component
* Add @Input() decorator to it to expose it to other Components
* Use it as Property binding in App component

### Assigning an Alias to Custom Properties

* Alias can be used for the property by passing the alias name in the argument of Input Decorator
* That alias name is what is exposed now to the outside world

### Binding to Custom Events

* Use of new EventEmitter with Generic type and emit it when event occurs in the sub-component
* Need to use @Output() to expose it to the outside world
* Event Bind in the App Component's template

### Assigning an Alias to Custom Events

* Similar to @Input, we can add an alias to the property of the Component by passing it as an argument to @Output
* This will expose it by the alias name to the outside world

### Custom Property and Event Binding Summary

* Property Binding with @Input allows us to bind Properties of Child Components from Parent Component
* Event Binding allows us to add Custom events from the Sub-component and use it in the Parent Component
* Now this communication is from Child to Parent, but what about Child to Child or where the distance between the 2 components is huge, then this would get complicated as we need to build a chain of Inputs and Outputs
* Another approach in services section

### Understanding View Encapsulation

* Now, since the p in App Component was moved to Server-Element Component, the p style in App Component's css doesn't work
* This is a behaviour enforced by Angular where each Component's html elements get assigned an attribute specific to the Component
* You can check this in Inspect
```html
<p _ngcontent-prr-c42=""><!--bindings={
  "ng-reflect-ng-if": "false"
}--><em _ngcontent-prr-c42="">TestContent</em><!--bindings={
  "ng-reflect-ng-if": "true"
}--></p>
```
```css
p[_ngcontent-prr-c42]
```
* Angular emulates Shadow DOM where each element will have a Shadow DOM behind it, where you then could assign styles to each element

### More on View Encapsulation

* There is a property called **encapsulation** in Component Decorator where we can switch the ViewEncapsulation to None, ShadowDom and Emulated(default)
* When the ViewEncapsulation is set to None, then the attributes specific to a Component won't be applied by Angular to the html elements
* Also, the selectors won't have the attribute selector
* So the styles applied in this Component will be applied globally
* When ViewEncapsulation is ShadowDom, its behavior is similar to Emulated but this applies only in Browsers supporting ShadowDom technology
```html
<p><!--bindings={
  "ng-reflect-ng-if": "false"
}--><em>TestContent</em><!--bindings={
  "ng-reflect-ng-if": "true"
}--></p>
```
```css
p {
    color: blue;
}
```

### Using Local References in Templates

* There's no requirement for 2 way data binding in cockpit template as we are just providing the value on Click events and updating the server or the blueprint
* Instead, we can use a Local reference as an attribute to the Element(#)
* The Local Reference then can be used anywhere in the Template
* The Local Reference holds the Element to which it is attached

### @ViewChild() in Angular 8+

```txt
In Angular 8+, the @ViewChild() syntax which you'll see in the next lecture needs to be changed slightly:

Instead of:

@ViewChild('serverContentInput') serverContentInput: ElementRef;
use

@ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
The same change (add { static: true } as a second argument) needs to be applied to ALL usages of @ViewChild() (and also @ContentChild() which you'll learn about later) IF you plan on accessing the selected element inside of ngOnInit().

If you DON'T access the selected element in ngOnInit (but anywhere else in your component), set static: false instead!

If you're using Angular 9+, you only need to add { static: true } (if needed) but not { static: false }.
```

### Getting Access to the Template & DOM with @ViewChild

* With Local Reference, we can access the value of the element in Typescript code only after passing in the method of an event
* If we want to get value even before calling the method, we can use @ViewChild() Decorator with argument as the name of the Local reference or Component
* nativeElement property will give the underlying elements properties
* We shouldn't modify the values of the DOM from this even though we can as it is bad practise. The better way of doing is from Property Binding or String Interpolation

### Projecting Content into Components with ng-content

* If you want to add Content between Opening and Closing tags of a Component, then add that content, also in the Desired Component, add ng-content tag
* ng-content is a Directive which serves a Hook
* This is a very nice feature for reusable Widgets
* This is a very good alternative for Property Binding
* Example of moving p tag from server-element to app

### Understanding the Component Lifecycle

* Angular has different Lifecycle Hooks(methods) we can hook into
* ngOnChanges: Called after a bound input property changes
  * This is executed multiple times
  * Right at the start when a new Component is created
  * Also when properties decorated with @Input changes
  * This receives changes of SimpleChanges type as Argument
* ngOnInit: Called once the Component is initialized
  * Once Angular finishes Basic Initilization(After the Component Object was created)
  * Runs after the Constructor
* ngDoCheck: Called during every change detection run
  * Runs multiple times
  * Like something in the Template changes or the Component changes
  * Even if nothing changes, but if a element is clicked, timer fired etc, even then this Hook runs
* ngAfterContentInit: Called after content(ng-content) has been projected into view
* ngAfterContentChecked: Called every time the projected content has been checked
  * Called after every Change Detection cycle
* ngAfterViewInit: Called after the component's view (and child views) has been intialized
* ngAfterViewChecked: Called every time the view (and child views) has been checked
* ngOnDestroy: Called once the component is about to be destroyed

### Seeing Lifecycle Hooks in Action

* Check server-element Component for the Lifecycle methods
* It's sufficient to just add the Lifecycle methods but add the interfaces as well in implements
* Note for ngOnChanges, there should be a change in Object. Change in property of an object doeesn't have an impact
  * So name property of ServerElement is used for Demo
  * Since it is a primitive type, the change is considered for ngOnChanges
```txt
## Straight after ng serve -o

Constructor called
ngOnChanges called
Object
ngOnInit called
ngDoCheck called
ngAfterContentInit called
ngAfterContentChecked called
ngAfterViewInit called
ngAfterViewChecked called
core.js:27988 Angular is running in development mode. Call enableProdMode() to enable production mode.
ngDoCheck called
ngAfterContentChecked called
ngAfterViewChecked called

## After Clicking on Add Server

Constructor called
ngDoCheck called
ngAfterContentChecked called
ngAfterViewChecked called
ngOnChanges called
server-element.component.ts:24 {element: SimpleChange, name: SimpleChange} ... expand to check more properties 
ngOnInit called
ngDoCheck called
ngAfterContentInit called
ngAfterContentChecked called
ngAfterViewInit called
ngAfterViewChecked called

## After Clicking on Change First Element button

ngOnChanges called
{name: SimpleChange}
ngDoCheck called
ngAfterContentChecked called
ngAfterViewChecked called

## After Clicking on Destroy First Element button

ngOnDestroy called
```