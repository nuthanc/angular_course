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