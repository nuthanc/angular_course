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