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