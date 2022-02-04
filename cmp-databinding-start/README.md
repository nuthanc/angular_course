### Splitting Apps into Components

* Checkout this starter folder cmp-databinding-start 
* Now, everything is in the app component
* Let's move it to Other Components
```sh
ng g c cockpit --skip-tests true
ng g c server-element --skip-tests true
```

### Property & Event Binding Overview

* Property & Event Binding can be used in
  * HTML Elements: Native Properties & Events
  * Directives: Custom Properties & Events
  * Components: Custom Properties & Events