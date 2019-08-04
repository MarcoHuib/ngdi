import { Component, OnInit } from '@angular/core';
import { Cards } from './cards.model';

@Component({
  selector: 'ngdi-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  private static cardExample: Cards = {
    title: 'Card title',
    image: 'https://picsum.photos/200/200',
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
  };

  public show = false;
  public cards: Cards[] = [
    CardsComponent.cardExample
  ];


  constructor() { }

  ngOnInit() {
  }

  public openEditPanel() {
    // this.show = !this.show;
    this.cards.push(
      CardsComponent.cardExample
      );
  }

}
