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
* After this add router-outlet directive in the Parent Component
* Check Servers and Users Component for this