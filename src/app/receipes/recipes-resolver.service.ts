
import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { RecipieModle } from './recipie.modle';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from './recipe.service';


@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<RecipieModle []> {

    constructor(private DataStorageService: DataStorageService, private recipeService: RecipeService) { }

    resolve(route: ActivatedRouteSnapshot , state: RouterStateSnapshot) {
        const recipes = this.recipeService.getRecipes();
        if (recipes.length === 0) {
            return this.DataStorageService.fetchRecipes();
        } else {
            return recipes;
        }
    }

}
