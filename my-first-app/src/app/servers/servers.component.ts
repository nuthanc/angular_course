import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',Attribute selector
  // selector: '.app-servers',Class selector
  selector: 'app-servers',
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
