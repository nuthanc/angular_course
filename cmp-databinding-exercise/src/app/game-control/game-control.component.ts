import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  
  // In Comments are my Implementation
  // @Output() startPressed = new EventEmitter<number>();
  // num = 0;
  // eventRef = setInterval(() => {}, 1000);
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  constructor() {
    // clearInterval(this.eventRef);
  }

  ngOnInit(): void {}
  // My Implementation
  // onStart() {
  //   this.eventRef = setInterval(() => {
  //     this.startPressed.emit(++this.num);
  //   }, 1000);
  // }

  // onStop() {
  //   clearInterval(this.eventRef);
  // }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }
}
