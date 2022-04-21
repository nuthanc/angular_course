import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as RecipesActions from '../recipes/store/recipe.actions';
import * as AuthActions from '../auth/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;

  constructor(private store: Store<fromApp.AppState>) {
    this.store
      .select('auth')
      .subscribe((authState) => (this.isLoggedIn = authState.isLoggedIn));
  }

  ngOnInit(): void {}

  onSave() {
    this.store.dispatch(RecipesActions.saveRecipes());
  }

  onFetch() {
    this.store.dispatch(RecipesActions.fetchRecipes());
  }

  onLogout() {
    this.store.dispatch(AuthActions.startLogout());
  }
}
