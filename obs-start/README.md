### Analyzing Angular Observables

* We have seen in routing section about server and recipe Components, where we subscribe to params when we are changing routes in the same Component
* Similarly we can see the same in User component in this project
* There params is the observable(as it is a stream emitting different route params) and we subscribe to it

### Getting Closer to the Core of Observables

* Let's use an Observable called 'interval' imported from rxjs in Home component
* interval is an observable which emits a value every ms value given
* We can subscribe to it and place our code
* When we navigate away from the Component, the Observable still keeps running and when we navigate back to it again, a new Observable is emitted again
* This will cause Memory leaks(Unnecessary data keeps on filling the memory) and will slow down the App
* So we shouldn't forget to unsubscribe in ngOnDestroy
* There are some observables like http which emit a value only once and they are done
* Angular provided Observables are destroyed automatically by Angular

### Building a Custom Observable

* Observable.create is deprecated, use new Observable
* observer is the part being interested about new data, errors or observable being completed
  * This is the listening part which we get as Argument
  * next is a callback for letting our Observer know that there is a new value

### Errors & Completion

* Similar to next, we have error and complete callback for observer
* And when we subscribe, we get data callback as 1st argument, error callback as 2nd argument and complete callback as 3rd argument
* Throwing Error cancels the Observable and lets it die
* Whenever an Observable is complete, it really is done and there is no other values emitted after
* When an observer calls error or complete, there is no need to Unsubscribe as it is already dead, but there is no harm in unsubscribing
* error is not same as complete,i.e complete callback doesn't get executed in subscribe if error is thrown before complete

### Observables & You!

* We don't usually write Observables, we will just subscribe and use it from 3rd party libraries
* But usually, an Observable wraps an Event source(AJAX request, Click listener, etc) and emits data, error or completion event
* We basically subscribe and get that data or errors

### Understanding Operators

* Before subscribing, we can modify the data from the Observables using Operators
* Operators are attached to Observables using pipe method(from rxjs) and you can provide any number of operators in pipe
* Operators come from rxjs/operators
* Then we attach subscribe to the pipe
* https://academind.com/tutorials/understanding-rxjs

### Subjects

* Subjects can be used instead of EventEmitters for Cross Component communication
* We use next method for Subjects
* Let's check of a usecase when clicked on Activate in User component, a certain text is printed in the App Component
* For this, we generally use Services and EventEmitter
```sh
ng g s user --skip-tests true
```
* A better approach is to use Subjects
* Observables are generally Passive as we wrap callback, event
* Subjects are Active(actively need to be triggered from us) because we can call 'next' from outside
* Use of Subjects is the recommended way instead of EventEmitter for Cross component communication
* When using @Output, use Angular's EventEmitter
* Also we need to unsubscribe in ngOnDestroy

### Useful Resources

```txt
Useful Resources:

Official Docs: https://rxjs-dev.firebaseapp.com/

RxJS Series: https://academind.com/learn/javascript/understanding-rxjs/

Updating to RxJS 6: https://academind.com/learn/javascript/rxjs-6-what-changed/
```