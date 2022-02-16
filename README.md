# Angular

### What is Angular?

* JS Framework which allows you to create reactive SPAs
  * One HTML file and the Page never changes

### Angular vs Angular 2 vs Latest Angular Version

* AngularJS (Angular 1) had major issues
* Angular 2 - Complete Re-Write from Ground UP
* From Angular 2, it's just Angular
* Angular 4 to Angular 9 
* From Angular 2 to Angular 9, it is small incremental backwards-compatible changes
* New version every 6 months

### Troubleshooting

```txt
A lot of problems are solved by making sure you're using the latest version of NodeJS, npm and the CLI itself.

Updating NodeJS:

Go to nodejs.org and download the latest version - uninstall (all) installed versions on your machine first.

Updating npm:

Run [sudo] npm install -g npm  (sudo  is only required on Mac/ Linux)
Since npm v7 can cause issues, you should ensure that you use v6. Therefore, also run npm install -g npm@6 to ensure that you are using that version (on macOS, you might need to add sudo in front of that command).

Updating the CLI

[sudo] npm uninstall -g angular-cli @angular/cli 

npm cache verify 

[sudo] npm install -g @angular/cli 

Here are some common issues & solutions:

Creation of a new project takes forever (longer than 3 minutes)
That happens on Windows from time to time => Try running the command line as administrator

You get an EADDR error (Address already in use)
You might already have another ng serve process running - make sure to quit that or use ng serve --port ANOTHERPORT  to serve your project on a new port

My changes are not reflected in the browser (App is not compiling)
Check if the window running ng serve  displays an error. If that's not the case, make sure you're using the latest CLI version and try restarting your CLI
```

### Project Setup and First App

```sh
sudo npm install -g @angular/cli
ng new my-first-app
# Didn't choose Routing and chose CSS
cd my-first-app
ng serve -o
```

## Check my-first-app's README which covers The Basics

## Course Project - The Basics

* Project containing Shopping List and Recipe Book Features

### Planning the App

* Think of the layout(General structure of App), what Components it needs
* Start with the *Features*
  * Shopping List section
  * Recipe Book section
* To contain this, we need a root Component which is *App*
* To navigate between Shopping List and Recipe Book we need a *Header*
* Shopping List can have the following Components
  * Shopping List: This will display the data
  * Shopping List Edit: This is for providing the data
* Recipe Book can have the following Components
  * Recipe List: Data containing the list of Recipes
  * Recipe Item: Each Recipe as a own Item since it holds a good amount of info
  * Recipe Detail: See info about a Recipe upon Selection
* Each Component is focussing on one main Topic like displaying a list, displaying info about single item
  * Can be split even more or Merge them according to your requirements
* Model to be used: Data for representation
  * We should define how it looks like
  * Ingredient(name and amount) and Recipe(title, url, description, ingredients...)

### Setting up the Application

```sh
ng new basics
# No to Routing and chose CSS
cd basics
```
* Check the rest in basics folder

## Debugging

### Understanding Angular Error Messages

* Open Console to check the errors
* Line number is not relevant as the files get merged
* Check upon clicking which button or any other element this happens and check the Directives for that element

### Debugging Code in the Browser Using Sourcemaps

* Debugging Logical errors are difficult
* Chrome, go to Sources -> main.bundle.js -> Find the code like splice(E.g) and click on number to create a Breakpoint
* Even more convenient way to search is Go to webpack folder -> . -> There you will find the same directory structure
* js to ts code mapping

### Using Augury to Dive into Angular Apps

* Google for Angular Augury(now deprecated I guess)
* Instead use Angular Dev Tools

## Attaching cmp-databinding-start

* Check its README

## cmp-databinding exercise in 

* ng new cmp-databinding-exercise
* Check its README

## Course Project - Components & Databinding

* Copied basics-course and renamed to cmp-databinding-course

## Directives Deep Dive

### Module Introduction

* Attribute Directives(Only affects the element they are added to) and Structural Directives(Change the structure of the DOM)

## Attaching directives-start

* check its README

## Course Project - Directives

* Copied cmp-databinding-course and renamed to directives-course

## Using Services & Dependency Injection

### Module Introduction

* What are Services?
  * It's a Centralized Business Unit
  * Prevents Duplication of code and Provides Data Storage