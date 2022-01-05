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