import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
  username = '';

  constructor() {
    this.serverStatus = Math.random() > 0.5? 'online': 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  onReset() {
    this.username = '';
  }

  getColor() {
    return this.serverStatus === 'online'? 'green': 'red';
  }
}