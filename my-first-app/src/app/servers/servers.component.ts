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
  serverName = 'Nuthan';
  servers = ['Apache', 'Nginx']
  addText = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.addText = true;
    this.serverCreationStatus = 'Server Created! with name '+this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {}
}
