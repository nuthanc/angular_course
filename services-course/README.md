# Directives - Course Project

### Building and Using a Dropdown Directive

* We are building a Directive which attaches a certain class when clicked and removes it after clicking it again
* The class name is open which when added to div in recipe-detail, the Dropdown opens
* Check dropdown.directive.ts in shared folder
* You can create through cli using ng c d shared/dropdown but for practise creating it manually

### Closing the Dropdown from Anywhere

```txt
If you want that a dropdown can also be closed by a click anywhere outside (which also means that a click on one dropdown closes any other one, btw.), replace the code of dropdown.directive.ts by this one (placing the listener not on the dropdown, but on the document):

import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}
```