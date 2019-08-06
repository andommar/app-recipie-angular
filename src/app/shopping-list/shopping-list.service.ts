import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient ('Apples', 5),
    new Ingredient ( 'Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  //nos podemos evitar lo de Eventemitter si directamente actualizamos el array ingredients, sin slice. Con ingredients changed enviamos con eventemitter el array
  //para que en shopping list component con susbscribe si existen cambios, éste los capture
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {//pasamos ingredientes de shopping list al servicio de recipie 
    // for(let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients); //ES6 spread operator (...) prepara una lista de ingredientes que son enviados al array
    this.ingredientsChanged.emit(this.ingredients.slice()); //pasamos el eventemitter, para que no se pase una lista solo

  }

  constructor() { }


}
