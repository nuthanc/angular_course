import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // currentPage = 'Recipes';

  // onLinkClick(text: string) {
  //   this.currentPage = text
  // }

  loadedFeature = 'recipes';
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
