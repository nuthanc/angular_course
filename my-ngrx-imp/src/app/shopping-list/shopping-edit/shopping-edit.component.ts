import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as fromApp from '../../store/app.reducer';
import * as slActions from '../store/shopping-list.action';
import { Ingredient } from 'src/app/shared/ingredient.model';
// import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm!: NgForm;
  subscription!: Subscription;
  editMode = false;
  editedItemIndex!: number;
  editedItem!: Ingredient;

  // constructor(private shoppingListService: ShoppingListService) {}
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.subscription = this.store
      .select('shoppingList')
      .subscribe((shoppingListState) => {
        this.editMode = shoppingListState.editMode;
        if(this.editMode) {
          this.editedItemIndex = shoppingListState.editedItemIndex;
          this.editedItem = shoppingListState.ingredients[this.editedItemIndex];
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount,
          });
        }
      });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      // this.shoppingListService.updateIngredient(
      //   this.editedItemIndex,
      //   newIngredient
      // );
      this.store.dispatch(
        slActions.updateIngredient({ ingredient: newIngredient })
      );
    } else {
      // this.shoppingListService.addIngredient(newIngredient);
      this.store.dispatch(
        slActions.addIngredient({ ingredient: newIngredient })
      );
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    // this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.store.dispatch(slActions.deleteIngredient());
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
