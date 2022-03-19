import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
  }

  onSave() {
    
  }

  onFetch() {

  }
}
