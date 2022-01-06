import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',Attribute selector
  // selector: '.app-servers',Class selector
  selector: 'app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'Server not yet created';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server Created!';
  }

  ngOnInit(): void {}
}
