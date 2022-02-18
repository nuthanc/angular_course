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
* To do this, we can get the router property in the constructor(Import Router from angular core) and then navigate to the path(Path is an array)
* We used absolute path, but we can use relative path too, but we need to control what path should this be relative to