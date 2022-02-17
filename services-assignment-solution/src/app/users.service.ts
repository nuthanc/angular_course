import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

// @Injectable({
//   providedIn: "root",
// })
@Injectable()
export class UsersService {
  activeUsers = ["Max", "Willy"];
  inactiveUsers = ["Kohli", "Rahane"];

  constructor(private counterService: CounterService) {}

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementinactiveToActiveCounter();
  }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactiveCounter();
  }
}
