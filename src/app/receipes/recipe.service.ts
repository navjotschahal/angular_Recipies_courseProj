import { Subject } from 'rxjs';
import {RecipieModle} from './recipie.modle';
import { Injectable} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {

  // recipeSelected = new Subject<RecipieModle>();

  recipesChanged = new Subject<RecipieModle[]>();

  private receipes: RecipieModle[] = [];

  constructor(private shoppingListService: ShoppingListService) {

  }

  setRecipes(fetchedRecipes: RecipieModle[]) {
    this.receipes = fetchedRecipes;
  }

  getRecipes() {
    return this.receipes.slice();
    // this.recipesChanged.next(this.receipes.slice());
  }
    addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredients);

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
