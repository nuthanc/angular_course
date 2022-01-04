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