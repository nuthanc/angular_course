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