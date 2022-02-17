import { Component } from '@angular/core';
import { UsersService } from './users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: []
  providers: [UsersService]
})
export class AppComponent {
}
