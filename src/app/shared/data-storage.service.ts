import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../receipes/recipe.service';
import { RecipieModle } from '../receipes/recipie.modle';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private httpClient: HttpClient, private recipeService: RecipeService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.httpClient.put('https://courseprojudemyng.firebaseio.com/recipes.json', recipes)
    .subscribe(
      res => {
        console.log(res);
      }
    );
  }

  fetchRecipes() {
    return this.httpClient.get<RecipieModle[]>('https://courseprojudemyng.firebaseio.com/recipes.json')
    .pipe(map( recipes => {
      return recipes.map( recipe => {
        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
      });
    }),
    tap( recipes => {
      this.recipeService.setRecipes(recipes);
    }));

  }
}
