import { Component, OnInit } from '@angular/core';
import { Recipie } from '../recipie.model';
import { RecipieService } from '../recipie.service';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {

  recipies: Recipie[] = [];

  constructor(private recipiesService: RecipieService) {}



  ngOnInit() {
    this.recipies = this.recipiesService.getRecipes();
  }

}
