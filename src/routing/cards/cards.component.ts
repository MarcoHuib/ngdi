import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngdi-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public show = false;

  constructor() { }

  ngOnInit() {
  }

}
