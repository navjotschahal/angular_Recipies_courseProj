import { Subject } from 'rxjs';
import {RecipieModle} from './recipie.modle';
import { Injectable} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import { Store } from '@ngrx/store';

import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';

@Injectable()

export class RecipeService {

  // recipeSelected = new Subject<RecipieModle>();

  recipesChanged = new Subject<RecipieModle[]>();

  private receipes: RecipieModle[] = [];

  constructor(
    private shoppingListService: ShoppingListService,
    private store: Store<fromShoppingList.AppState>
  ) { }

  setRecipes(fetchedRecipes: RecipieModle[]) {
    this.receipes = fetchedRecipes;
    return this.recipesChanged.next(this.receipes.slice());
  }

  getRecipes() {
    return this.receipes.slice();
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    // this.shoppingListService.addIngredients(ingredients);
    this.store.dispatch( new ShoppingListActions.AddIngredients(ingredients) );

  }

  getRecipe(index: number) {
    return this.receipes.slice()[index];
  }

  addRecipe(recipe: RecipieModle) {
    this.receipes.push(recipe);
    this.recipesChanged.next(this.receipes.slice());
  }

  updateRecipe(index: number, newRecipe: RecipieModle) {
    this.receipes[index] = newRecipe;
    this.recipesChanged.next(this.receipes.slice());
  }

  deleteRecipe(index: number) {
    this.receipes.splice(index, 1);
    this.recipesChanged.next(this.receipes.slice());
  }
}
