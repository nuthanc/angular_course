import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() startPressed = new EventEmitter<number>();

  num = 0;
  eventRef = setInterval(() => {}, 1000);

  constructor() {
    clearInterval(this.eventRef);
  }

  ngOnInit(): void {}

  onStart() {
    this.eventRef = setInterval(() => {
      this.startPressed.emit(++this.num);
    }, 1000);
  }

  onStop() {
    clearInterval(this.eventRef);
  }
}
