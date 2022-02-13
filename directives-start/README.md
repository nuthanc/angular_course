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