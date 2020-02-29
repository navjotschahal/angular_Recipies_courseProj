import {Component, OnInit, OnDestroy} from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import { IngredientModel } from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: IngredientModel [] ;
  private idChangeSub: Subscription;

  ngOnDestroy(): void {
    this.idChangeSub.unsubscribe();
  }

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    this.idChangeSub = this.shoppingListService.ingredientsChanged.subscribe((ingredients: IngredientModel[]) => {
      this.ingredients = ingredients;
    });
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
}
