import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {

  recipies: Recipie[] = [
    new Recipie ('Macarrones', 'Están riuquisimos',
    'https://www.cocinacaserayfacil.net/wp-content/uploads/2018/07/macarrones-con-tomate-y-atun.jpg'),
    new Recipie ('Pollo al chilindrón', 'Qué rico está mañico!',
    'http://recetasdecocina.elmundo.es/wp-content/uploads/2016/10/receta-pollo-al-chilindron.jpg')
  ];

  @Output() recipieWasSelected = new EventEmitter <Recipie>();

  constructor() { }

  onRecipieSelected(recipie: Recipie) {
    this.recipieWasSelected.emit(recipie);
  }

  ngOnInit() {
  }

}
