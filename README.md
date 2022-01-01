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