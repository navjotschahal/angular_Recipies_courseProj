import {Component, OnInit, OnDestroy} from '@angular/core';
import { Subject, Subscription, Observable } from 'rxjs';

import { IngredientModel } from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import { Store } from '@ngrx/store';
import * as fromShoppingList from './store/shopping-list.reducer';
import * as shoppingListActions from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ingredients: IngredientModel[]}>;
  private idChangeSub: Subscription;

  ngOnDestroy(): void {
    // this.idChangeSub.unsubscribe();
  }

  constructor(
    private shoppingListService: ShoppingListService, 
    private store: Store<fromShoppingList.AppState>
  ) { }

  ngOnInit() {
    this.ingredients = this.store.select('shopingList');
  //   this.ingredients = this.shoppingListService.getIngredients();

  //   this.idChangeSub = this.shoppingListService.ingredientsChanged.subscribe((ingredients: IngredientModel[]) => {
  //     this.ingredients = ingredients;
  //   });
  }

  onEditItem(index: number) {
    // this.shoppingListService.startedEditing.next(index);

    this.store.dispatch(new shoppingListActions.StartEdit(index));
  }
}