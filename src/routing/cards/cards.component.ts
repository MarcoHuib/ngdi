import { Component, OnInit, Inject } from '@angular/core';
import { Cards } from './cards.model';
import { Observable } from 'rxjs';
import { CardsService } from './cards.services';
import { EDITPANEL } from 'src/shared/editpanel/token/editpanel.token';

@Component({
  selector: 'ngdi-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public cards$: Observable<Cards[]>;

  constructor(@Inject(EDITPANEL) private cardsService: CardsService) {
    this.cards$ = this.cardsService.get();
  }

  ngOnInit() {
  }

}
