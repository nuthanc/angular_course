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