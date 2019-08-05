import { Injectable, EventEmitter } from '@angular/core';
import { Recipie } from './recipie.model';

@Injectable({
  providedIn: 'root'
})
export class RecipieService {

  private recipies: Recipie[] = [
    new Recipie ('Macarrones', 'Están riuquisimos',
    'https://www.cocinacaserayfacil.net/wp-content/uploads/2018/07/macarrones-con-tomate-y-atun.jpg'),
    new Recipie ('Pollo al chilindrón', 'Qué rico está mañico!',
    'http://recetasdecocina.elmundo.es/wp-content/uploads/2016/10/receta-pollo-al-chilindron.jpg')
  ];

  getRecipes() {
    return this.recipies.slice(); //ponemos slice porque así cogemos una copia del array, sino accederiamos a él
  }

  recipieSelected = new EventEmitter<Recipie>();

  constructor() { }
}
