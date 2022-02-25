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