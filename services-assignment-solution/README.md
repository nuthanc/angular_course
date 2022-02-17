### Services Assignment Solution

```sh
ng g s users
```
* Author used UsersService in AppComponent. There's no harm in providing in the app.module.ts
* CounterService is provided in app.module.ts since it is required by UsersService
* With Angular 6+, providedIn can be used in the Service Injectable decorator itself and no need to provide in providers of AppComponent and app.module.ts
* Also CounterService could have been called in Active and Inactive Users component instead of UsersService