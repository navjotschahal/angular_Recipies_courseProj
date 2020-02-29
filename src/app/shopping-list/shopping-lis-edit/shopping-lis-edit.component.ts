import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {IngredientModel} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

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

  constructor(private shoppingListService: ShoppingListService) { }


  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.slform.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
     );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAddIngredient(form: NgForm) {
    const value = form.value;
    const  newIngredient = new  IngredientModel(value.name, value.amount);
    if (this.editMode === true) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.addingredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slform.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

}
