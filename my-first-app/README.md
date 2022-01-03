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