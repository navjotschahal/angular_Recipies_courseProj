import {IngredientModel} from '../shared/ingredient.model';

export class RecipieModle {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: IngredientModel[];

  constructor(name: string, description: string, imagePath: string, ingredients: IngredientModel[]) {
    this.description = description;
    this.name = name;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
