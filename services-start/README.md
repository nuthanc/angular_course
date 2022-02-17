### Why would you Need Services

* Checkout this repo for 3 Components: App, Account and NewAccount
* It's using Property and Event Binding to pass data between the Components
* Solved jasmine dependency error while npm install with this in package.json
```json
"jasmine-core": "~3.8.0",
"karma-jasmine-html-reporter": "^1.7.0"
```
* npm install @types/node --save-dev

### Creating a Logging Service

* Let's create a Logging Service which will just console log
* For this create logging.service.ts in app folder
* Create and export a class for Logging Service
* For Usage, we don't instantiate a class in the required Component and call the logStatusChange method
* Angular provides a much better method to access the Service

### Injecting the Logging Service into Components

* In the constructor, add the **property and the type**(Mandatory) of the Service class name
* Access specifier such as public or private is specified before it as a shortcut to define and instantiate the property
* Since Angular is the one creating the Components(Instantiate), we need to specify **providers** in the Decorator and mention the class name
* This lets the Service stay in the Angular Ecosystem

### Creating a Data Service

* Another usecase of Service is to act as Data Storage
* Check accounts.service.ts for this
* The accounts array and the methods from App Component are moved there
* With this, Output and EventEmitters can be removed from New Account and Account components
* Input in Account Component is still left as is as we are receiving the Inputs from the App component
* Most initializations should be done in ngOnInit and not in constructor as shown in app component
* The Logs are working, but the status is not changing and the New account in not added

### Understanding the Hierarchical Injector

* The Angular Dependency Injector is a Hierarchical Injector
* The same instance of the service is available for the Component and its children if it is injected in the Component
* But if the Injection is in the child, then the same Service instance won't be available to the Parent
* Service Provided levels:
  * AppModule: Same Instance of Service is available **Application-wide**
  * AppComponent: Same Instance of service is **available for all Components(but not for other Services)**
  * Any Other Component: Same Instance of Service is availabe fo the **Component and all its child components**
* Our status is not working because it is getting Overwritten(as it will be a New Instance)

### How Many Instances of Service should it be

* There are 3 Instances of the Service in our App now, 1 in App, 1 in Account and the last 1 in New Account
* We can make it one instance by removing in the providers in Account and New Account, but leave the property in the constructor
  * constructor tells Angular that we need an Instance and the provider will tell which Instance(same instance or different instance)

### Injecting Services into Services

* Let's try to use Logging Service in Accounts Service
* For Injecting service to another service, we need to use providers in the app.module level
* Also, we need to mark the service where we are injecting as Injectable(in AccountsService)
```txt
We recommend adding @Injectable() to every service class, even those that don't have dependencies and, therefore, do not technically require it
```

### Using Services for Cross-Component Communication

* Earlier if we wanted communication between Account Component and New Account Component, we had to setup multi layer Input and Output decorators starting from Account Component to App Component to New Account Component
* But with services, it is so easier
* We can setup the EventEmitter in the AccountsService and emit the event(statusUpdated) from the Account Component and subscribe to it in the New Account Component
* EventEmitter wraps an Observable
* This makes Cross-Component Communication easier

### Services in Angular 6+

```txt
If you're using Angular 6+ (check your package.json  to find out), you can provide application-wide services in a different way.

Instead of adding a service class to the providers[]  array in AppModule , you can set the following config in @Injectable() :

@Injectable({providedIn: 'root'})
export class MyService { ... }
This is exactly the same as:

export class MyService { ... }
and

import { MyService } from './path/to/my.service';

@NgModule({
    ...
    providers: [MyService]
})
export class AppModule { ... }
Using this new syntax is completely optional, the traditional syntax (using providers[] ) will still work. The "new syntax" does offer one advantage though: Services can be loaded lazily by Angular (behind the scenes) and redundant code can be removed automatically. This can lead to a better performance and loading speed - though this really only kicks in for bigger services and apps in general.
```