import { IngredientModel } from '../../shared/ingredient.model';
import * as shoppingListActions from './shopping-list.actions';

export interface State {
    ingredients: IngredientModel[];
    editedIngredient: IngredientModel;
    editedIngredientIndex: number;
}

export interface AppState {
    shopingList: State;
}

const initialState: State = {
    ingredients: [
        new IngredientModel('Apples', 5),
        new IngredientModel('Oranges', 10),
      ],
    editedIngredient: null,
    editedIngredientIndex: -1
};

export function shoppingListReducer(state = initialState, action: shoppingListActions.ShoppingListIngredients) {
    switch (action.type) {

        case shoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [ ...state.ingredients, action.payload ]
            };
            
        case shoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [ ...state.ingredients, ...action.payload ]
            };   

        case shoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[state.editedIngredientIndex];
            const updatedIngredient = {
                ...ingredient, ...action.payload.ingredient
            }
            const updatedIngredients = [...state.ingredients];
            updatedIngredients[state.editedIngredientIndex] = updatedIngredient;

            return {
                ...state,
                ingredients: updatedIngredients,
                editedIngredientIndex: -1,
                editedIngredient: null
            };

        case shoppingListActions.DELETE_INGREDIENT:
            
            return {
                ...state,
                ingredients: state.ingredients.filter( (ele, eleIndex) => {
                    return eleIndex !== state.editedIngredientIndex;
                }),
                editedIngredientIndex: -1,
                editedIngredient: null
            };
        
        case shoppingListActions.START_EDIT:
            return {
                ...state,
                editedIngredientIndex: action.payload,
                editedIngredient: { ...state.ingredients[action.payload] }
            };

        case shoppingListActions.STOP_EDIT:
            return {
                editedIngredientIndex: -1,
                editedIngredient: null
            };

        default:
            return state;
    }
}