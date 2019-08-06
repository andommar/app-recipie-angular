import { Component, OnInit, Input } from '@angular/core';
import { Recipie } from '../recipie.model';
import { RecipieService } from '../recipie.service';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent implements OnInit {

  @Input() recipie: Recipie;

  constructor(private recipieService: RecipieService) { }

  onAddIngredients() {
    this.recipieService.onAddToShoppingList(this.recipie.ingredients);
  }

  ngOnInit() {
  }

}
