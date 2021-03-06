# MyFirstApp

### Editing the First App

* In src/app/app.component.html, You can have your html along with dynamic content with double curly braces(Data binding)
* Inspecting Page Source, you can see the <app-root> tag, which is similar to React's #root div
* ngModel directive for data binding and for this import FormsModule in app.module.ts

### Course Structure

* Getting Started
* The Basics
* Components & Databinding
* Directives: ngModel, ngFor
* Services & Dependency Injection
* Routing
* Observables: Asynchronous code
* Forms
* Pipes: Transform the output
* Http
* Authentication
* Optimizations & NgModules
* Deployment
* Animation & Testing

### A Basic Project Setup Using Bootstrap for Styling

```sh
npm i bootstrap@3
# angular.json file
# architect -> build -> styles
ng serve -o
```
* Chrome -> Elements -> head -> styles.css 
* Source -> styles.css and check for Bootstrap

### How an Angular App gets Loaded and Started

* index.html is served by the Server(Single Page that is served)
* app-root in body
* app.component.ts -> @Component decorator -> selector app-root -> template -> app.component.html
* In Page Source, scripts are added at the end by the cli(ng serve) automatically
* main.ts(First code that gets executed) -> App Module pointing to app.module.ts -> Which in turn points to AppComponent in the bootstrap

### Components are Important!

* Build App by composing from Components
* app is the root component that holds our entire application
* Other components are nested within the app component
* Reusable templates

### Creating a New Component

* Create under src/app(For e.g server Component)
* Name of the folder same as name of the Component
* Create ts file and export the Component class
  * Decorate it with Component decorator with selector(unique string which points to the html tag) and templateUrl

### Understanding the Role of AppModule and Component Declaration

* Need to add new Component in app.module.ts declarations inside NgModule decorator to make Angular aware of the Component
  * By default, Angular will not scan all the files
* imports are Angular modules we are importing
* bootstrap is telling which Component Angular should be aware of when the App starts

### Using Custom Components

* Add the Server Component selector in app.component.html to render it

### Creating Components with the CLI and Nesting Components

```sh
ng generate component servers 
# Or shortcut
ng g c servers
```
* The above will generate the Component template
* spec file is for testing
* The cli does declaration, selector creation and other things automatically
* In app.component.html, provide Servers Component tag and in Servers html, render Server Component twice

### Working With Component Templates

* Inline templates by replacing templateUrl with template
* Use backtick for multi-line strings
* template or templateUrl is mandatory for a Component, selector and styleUrls are optional
* More code in separate file(templateUrl) and when there is less code, place it in template

### Working with Component Styles

* styleUrls is an array, so can use multiple stylesheets
* Use the css file(app.component.css) or inline styles by replacing styleUrls with styles
* Use backtick for multi-line strings

### Fully Understanding the Component Selector

* Can use Attribute and class selector instead of normal Element selector
* Selecting by ID and Pseudo selectors won't work
* Typically use Element selector for Components

### Practising Components

* Create 2 new Components: WarningAlert and SuccessAlert
* Output them beneath each other in the AppComponent
* Output a warning or success message in the Components
* Style the Components appropriately
```sh
ng g c warningAlert
ng g c successAlert
```

### What is Databinding

* Communication between TypeScript Code(Business Logic) and Template(HTML)
* Output Data from TypeScript code to the Template
  * String Interpolation ({{ data }})
  * Property Binding ([property]="data")
* Template(Like User clicking on a button) to TypeScript code : React to User Events
  * Event Binding ((event)="expression")
* Combination of Both:
  * Two-way-Binding ([(ngModel)]="data")

### String Interpolation

* Usage: double curly braces in html and value defined in ts file
* Can be String or anything that can be resolved to String
* Multi-line expression, Block expression and if and for Control structure not allowed,but ternary expression is allowed

### Property Binding

* HTML after being parsed by browser has different properties
* Property Binding allows to interact directly binding with the properties of the native html element
* Used with [property-name]="value"
* Write Typescript code within the quotation marks without using the curly braces

### Property Binding vs String Interpolation

* Check servers.component.html for both String Interpolation and Property Binding
* String Interpolation
  * Output something in template
* Property Binding
  * Change property

### Event Binding

* onclick attribute on the HTML element, but we are gonna use Angular's Event Binding
* Used with (event-name)="method()"
  * event-name without the on, e.g onclick will be click, onmouseenter will be mouseenter etc

### Passing and Using Data with Event Binding

* $event(Keyword) passed as parameter when called during Event Binding
* Explicit casting (<HTMLInputElement>event.target)

### Two-Way-Databinding

* Combining both **property and event binding**
* Two-Way-Databinding allows communication in both the directions
* Reacting to both in both directions
* Using ngModel and propertyName for the input, we do 2 way databinding
  * The change in input updates the propertyName(Event binding)
  * Also the change in property name elsewhere updates the value of the input element(Property binding)

### Combining All Forms of Data Binding

* All of the four covered in Servers Component
  * Event Binding
  * String Interpolation
  * Property Binding
  * Two Way Binding

### Practising Databinding

* Check Server Component

### Understanding Directives

* Directives are Instructions in the DOM
  * Components are also Directives(with a Template): It's a directive because it instructs Angular to select the particular element(selector) and add the Template
* Directives are mainly used with Attribute Selector
```txt
Another Example

Attribute style Selector

<p appTurnGreen>Receives a green background!</p>

@Directive({
  selector: '[appTurnGreen]'
})
export class TurnGreenDirective {
  ...
}
```

### Using ngIf to Output Data Conditionally

* ngIf works like an if statement
* It should return true or false
* Star is required because ngIf is a Structural Directive(Changes the structure of our DOM) which is an extra info for Angular
* Hook created in HTML to check where to add
```html
<button _ngcontent-tnh-c44="" class="btn btn-primary"> Add New Server
</button>
<!--bindings={
  "ng-reflect-ng-if": "false"
}-->
```

### Enhancing ngIf with and Else Condition

* Using ng-template(directive used to mark places in the DOM) along with marker #(Local reference)
```html
<p *ngIf="addText; else noServer">{{ serverCreationStatus }}</p>
<ng-template #noServer>
  <p>Server not created</p>
</ng-template>
```

### Styling Elements Dynamically with ngStyle

* Attribute Directives don't add or remove elements. They only change the element they were placed on(Without a *)
* ngStyle directive along with Property Binding to provide background color
  * Property name also happens to be ngStyle
  * Value is a JS object

### Applying CSS Classes Dynamically with ngClass

* ngClass for dynamically applying css classes
* ngClass is also used with property binding
* Value is a JS object
  * Key is the classname and the value is a condition which decides whether it should be attached or not
* If the class contains a dash, we need to wrap within single quotes
  * [ngClass]="{'online-class': serverStatus === 'online'}"

### Outputting Lists with ngFor

* Use ngFor structural directive(*) for iterating 

### Directives Assignment

```sh
ng g c details
```
* Check details Component