import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  show = true;
  timestamps: Date[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onDisplay() {
    this.show = !this.show;
    this.timestamps.push(new Date());
  }

}
