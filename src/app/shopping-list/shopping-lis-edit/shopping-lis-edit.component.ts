import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {IngredientModel} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import * as ShoppingListAcions from '../store/shopping-list.actions';
import * as fromShoppingList from '../store/shopping-list.reducer';

@Component({
  selector: 'app-shopping-lis-edit',
  templateUrl: './shopping-lis-edit.component.html',
  styleUrls: ['./shopping-lis-edit.component.css']
})
export class ShoppingLisEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slform: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: IngredientModel;

  constructor(
    private shoppingListService: ShoppingListService,
    private store: Store<fromShoppingList.AppState>
  ) { }


  ngOnInit() {

    this.subscription = this.store.select('shopingList').subscribe( stateData => {
      if (stateData.editedIngredientIndex > -1) {
        this.editMode = true;
        this.editedItem = stateData.editedIngredient;
        this.slform.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      } else {
        this.editMode = false;
      }
    });

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.store.dispatch(new ShoppingListAcions.StopEdit());

  }

  onAddIngredient(form: NgForm) {
    const value = form.value;
    const  newIngredient = new  IngredientModel(value.name, value.amount);
    if (this.editMode === true) {
      // this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
      this.store.dispatch(
        new ShoppingListAcions.UpdateIngedient(
          {ingredient: newIngredient}
        )
      );
    } else {
      // this.shoppingListService.addingredient(newIngredient);
      this.store.dispatch( new ShoppingListAcions.AddIngredient(newIngredient));
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slform.reset();
    this.editMode = false;
    this.store.dispatch(new ShoppingListAcions.StopEdit());
  }

  onDelete() {
    // this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.store.dispatch(
      new ShoppingListAcions.DeleteIngredient()
    );
    this.onClear();
  }

}
