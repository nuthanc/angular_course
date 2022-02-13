### ngFor and ngIf Recap

* ngFor and ngIf cannot be used in the same element
* Use parent div for both li elements
* Solved jasmine dependency error while npm install with this in package.json
```json
"jasmine-core": "~3.8.0",
"karma-jasmine-html-reporter": "^1.7.0"
```

### ngClass and ngStyle Recap

* ngClass and ngStyle implementation in app.component.html

### Creating a Basic Attribute Directive

* Create a folder for the Directive(basic-highlight in this example)
* Create a named file with directive.ts extension(basic-highlight.directive.ts)
* Export a class decorated with @Directive decorator with selector as a mandatory argument
    * Use square brackets to indicate that it is an Attribute selector, without that it will be an Element selector
    * The selector name should be in Camel case(Naming convention of Directives)
    * The constructor is called with the elementRef the Directive sits on(This is done by Angular Injection)
    * Injection is getting to access to other classes without having to instantiate them on our own
* Then mention the directive class in app.module.ts
* Finally, use it in any Template

### Using the Renderer to Build a Better Attribute Directive

* You shouldn't change the nativeElement directly as it not a best practise and it wouldn't work in Service Workers where Angular renders without a DOM
* So the best practise is to use a Renderer
```sh
ng g d better-highlight/better-highlight
```
* In the constructor, get both the elementRef and the renderer
* Then in ngOnInit, you can setStyle for the elementRef with the renderer
* setStyle(el: any, style: string, value: any, flags?: RendererStyleFlags2)
    * flags value are like important etc

### More about Renderer

* https://angular.io/api/core/Renderer2

### Using HostListener to Listen to Host Events

* Using HostListener Decorator, we can react to Events of the elements that the Directive sits on
* It takes any valid events as argument
* The method being decorated implements our functionality and receives the event as argument
* Checkout the example in better-highlight

### Using HostBinding to Bind to Host Properties

* It's not wrong to use Renderer, but there is an easier way for this usecase using HostBinding Decorator
* HostBinding binds to the property of the element on which the Directive sits on and it's the first argument
* It can bind to any property of the Host
* We have bound to style property and backgroundColor sub-property