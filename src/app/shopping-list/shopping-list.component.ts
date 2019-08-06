import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { RecipiesComponent } from '../recipies/recipies.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  // ingredients: Ingredient[] = [
  //   new Ingredient ('Apples', 5),
  //   new Ingredient ( 'Tomatoes', 10)
  // ];

  ingredients: Ingredient[];

  constructor(private ShoppingList: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.ShoppingList.getIngredients();
    this.ShoppingList.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }
}
