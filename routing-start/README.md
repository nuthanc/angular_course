# Routing

### Setting Up and Loading Routes

* Add a constant(appRoutes) of type Route[] containing objects of path and component in app.module.ts and let Angular know about it in Imports -> RouterModule.forRoot(appRoutes)
  * forRoot for registering routes with our main App
* Then use <router-outlet></router-outlet> directive(Here selector is element selector) to let Angular know where to insert the Current Component(decided based on the Route)
* Now you can change the URL and see the appropriate Components

### Navigating with Router Links

* We can use anchor tag's href to Navigate to other links
  * With every click, request gets sent to the server and new Page is sent
  * But this is bad since it reloads the Page and Application state is lost
* The better way to do it is using routerLink property binding
  * Since the value is string, we can remove the brackets from routerLink and single quotes from the string value

### Understanding Navigation Paths

* In the routerLink value, if the path is preceded by '/', that is absolute path
* If that is not there, then it will be relative path(Relative to the url(Component) you are in) which appends to your current path. Examples
  * routerLink="servers"
    * If you add this in servers component, then it will be localhost:4200/servers/servers
  * routerLink="./servers"
    * This is same as the above example
  * routerLink="../servers"
    * This is going one directory up and then servers
* From App Component, we can either add '/' or provide directly because it is in root path

### Styling Active Router Links

* Use routerLinkActive directive to bind to a class based on which path it is on
  * Path is determined by the routerLink
  * routerLinkActive can bound to the link element or the parent bounding it
    * Bound to parent(li) in this case because of Bootstrap
* routerLinkActive is based on contains and because of this even Home(/) gets active when Servers(/servers) or Users(/users) are active because / is present in /servers and /users
  * To prevent this, we add  [routerLinkActiveOptions]="{ exact: true }" as seen in App Component

### Navigating Programmatically

* Let's say we want to do some Complex operation first and then navigate to a different page from our Typescript code
* To do this, we can get the router property(injected) in the constructor(Import Router from angular core) and then navigate to the path(Path is an array)
* We used absolute path, but we can use relative path too, but we need to control what path should this be relative to
* Example in Home Component

### Using Relative Paths in Programmatic Navigation

* To use Relative Paths in the Programmatic Navigation(done using router property), we should use relativeTo option in navigate
* And relativeTo takes ActivatedRoute which can be injected in the constructor
* ActivatedRoute is the current route of the Component
* By default relativeTo is the root Route

### Passing Parameters to Routes

* We can add dynamic path segment(routes) using :id
  * After colon can be anything
* Check app.module.ts for dynamic route to UserComponent

### Fetching Route Parameters

* For fetching the dynamic path segment, in the Typescript file inject Activated route
* Use route.snapshot.params of particular property which is defined in the dynamic path segment
* Check user Component

### Fetching Route Parameters Reactively

* If we redirect to the same Component(even though the url changes) using routerLink, then Angular won't reinstantiate the Component
* So it doesn't know if the data changed
* So we need to use subscribe method on the ActivatedRoute's params
  * subscribe returns an Observable
  * An Observable is for Asynchronous code and subscribes for an event(which might happen in the future) and calls some method
* We only need to subscribe if we are reloading the same url but with different content, else only snapshot(First initialization) is sufficient

### An Important Note about Route Observables

* The subscription will always live on in memory because it is not closely tied to the Component
* Angular automatically does unsubscribing for you behind the scenes when the Component is destroyed
* But you can call it in onDestroy hook
* But for Custom Observables, we need to do it manually in onDestroy
* Check User Component

### Passing Query Parameters and Fragments

* Query Parameters(?key=value)
* Hash fragemnts(#) are for jumping to a particular section
* Add EditServerComponent route in app.module.ts and add routerLinks in servers Component
* To pass query parameters in template, we use queryParams property(takes object as value) and for Hash fragments, we use fragment property
* Check Servers Component's for this
* To do it programmatically(In Home Component), we use 2nd argument of Navigate method where queryParams and fragment can be used in the object

### Retrieving Query Parameters and Fragments

* Check EditServer Component
* To Retrieve, we can inject the ActivatedRoute in the constructor and get (snapshot.queryParams and snapshot.fragment)
* But if QueryParams or fragments change in the same Component(path), then simliar to params we can subscribe to queryParams and fragment
* Angular does unsubscribing for us behind the scenes when the Component is destroyed

### Practicing and some Common Gotchas

* Update proper routerLinks in users and servers component
* In Server component, get the Params id
```js
const id = Number(this.route.snapshot.params['id']);
// Alternative
const id = +this.route.snapshot.params['id'];
```

### Setting Up Child(Nested) Routes

* In the app module's appRoutes, in the Route object(path, component..), we can add children and add the nested routes
  * Path of parent is removed in the nested path
* After this add **router-outlet** directive in the *Parent Component*
* Check Servers and Users Component for this

### Using Query Parameters - Practice

* Add button in server component to edit it
* On clicking it, use Programmatic navigation to Edit Server component
* [queryParams]="{allowEdit: server.id === 3? '1': '0'}"
* Add the above in Servers Template, so that only Server 3 is allowed to edit
* In Edit Server, add allowEdit property
* But when Edit is clicked, the query param disappears

### Configuring the Handling of Query Parameters

* While navigating from Server Component to Edit Server Component, in order to not lose the query param info, we need to pass queryParamsHandling property in the 2nd argument's object
  * Values can be 'merge' or 'preserve'. merge is for merging the old as well as the current query params and preserve is for preserving the old query params(this will overwrite current query params if any)

### Redirecting and Wildcard Routes

* In app.module.ts, in the appRoutes, we can also have redirectTo to redirect something
* '**' is for catch all and must be present at the end
* Implemented in newly created component of page-not-found(ng g c page-not-found --skip-tests true)

### Important Redirection Path Matching

```txt
In our example, we didn't encounter any issues when we tried to redirect the user. But that's not always the case when adding redirections.

By default, Angular matches paths by prefix. That means, that the following route will match both /recipes  and just / 

{ path: '', redirectTo: '/somewhere-else' } 

Actually, Angular will give you an error here, because that's a common gotcha: This route will now ALWAYS redirect you! Why?

Since the default matching strategy is "prefix" , Angular checks if the path you entered in the URL does start with the path specified in the route. Of course every path starts with ''  (Important: That's no whitespace, it's simply "nothing").

To fix this behavior, you need to change the matching strategy to "full" :

{ path: '', redirectTo: '/somewhere-else', pathMatch: 'full' } 

Now, you only get redirected, if the full path is ''  (so only if you got NO other content in your path in this example).
```

### Outsourcing the Route Configuration

* When there are more than 2 routes, we can move the appRoutes a separate module like app-routing.module.ts
* There export class and have it  decorated by NgModule
* Provide RouterModule.forRoot(appRoutes) in the imports and add RouterModule in the exports(what should be accessible to the module which imports this)
* No need to provide declarations as it is already provided in app module

### An Introduction to Guards

* Running some piece of code before the Component is loaded in the route

### Protecting Routes with canActivate

* Implement AuthGuard service which implements the CanActivate interface
* Also have AuthService for simulating authentication with Promise and setTimeout
* In canActivate method of auth-guard return boolean for now after resolving
* Add these 2 services in App module's providers
* In App Routing module, add canActivate in the Route
  * This will apply as Guard to both Parent and its children

### Protecting Child (Nested) Routes with canActivateChild

* If we want to apply Guard only to the child routes, then we can use canActivateChild in the route and implement canActivateChild interface in the Guard

### Using a Fake Auth Service

* Add Login and Logout button in Home Component to call auth service's login and logout respectively on click

### Controlling Navigation with canDeactivate

* If want to run some code before leaving the route(deactivating the route), we can use canDeactivate in appRoutes(For EditServerComponent)
* A Guard needs to be a service, but we need the Component's property to decide what should be done 
* So we have service and interface and interface's method is implemented in the Component
* We need to implement CanDeactivateGuard service and CanComponentDeactive interface
* Don't forget to add CanDeactivateGuard in app.module's providers
* EditServer Component should implement CanComponentDeactivate interface
* Check edit-server component and can-deactivate-guard.service.ts
* This is useful for preventing accidentally navigating away

### Passing Static Data to a Route

* To pass static data to a Route, like for example ErrorComponent which renders errorMessage(provided externally from ActivatedRoute), we can provide data object containing the key value pairs in the Route of appRoutes
* Then in ErrorComponent, inject ActivatedRoute and subscribe and get the value
```sh
ng g c error --skip-tests true
```

### Resolving Dynamic Data with the resolve Guard

* Resolve Interface is different than CanActivate because unlike CanActivate, Resolve will always render the Component for the Route but it does some processing(**Maybe Asynchronous operation**) before Loading the Component
* resolve will run each time it renders the Route, so only snapshot is sufficient and subscribing is not required
* Changes in Server Component, AppRouting module, App module, ServerResolver service
* In AppRouting, in the route add resolve property which is an object with the key you use in the Component and the value is the Resolver service
* In the Component, you can access it in the ActivatedRoute's data property
  * We are subscribing here because the Server can change while we are on the same Route
* This is important for loading Asynchronous data

### Understanding Location Strategies

* In real life application when we are Hosting this, we won't have Angular Development Server and the real Server(Backend which hosts your application) will parse the routes and if doesn't find and throws a 404 error, we need to inform it to return index.html(By default, this is not the behavior )
  * Something like this, https://github.com/nuthanc/node_react_server/blob/master/index.js#L34-L40
* If you can't get this to work or if it's a Old Browser, we can use useHash as true in appRouting's RouterModule's forRoot
* This will add # and the server will ignore everything after the #, so that it uses index.html

### How Routing Works

* Url is changed
* Match is passed
  * If Direct is there, then the revised url is matched
* Process Guards
* Resolve and Prefetch any data required by the Route
* Activate Component(s) associated with the Route
* Display Template(s) into defined Router Outlets