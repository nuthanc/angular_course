import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // newServerName = '';
  newServerContent = '';
  constructor() {}

  ngOnInit(): void {}

  onAddServer(inputValue: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: inputValue.value,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint(inputValue: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: inputValue.value,
      serverContent: this.newServerContent,
    });
  }
}
