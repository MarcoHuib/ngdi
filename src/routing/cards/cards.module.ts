import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { CardsRoutingModule } from './cards-routing.module';
import { EditPanelModule } from 'src/shared/editpanel/editpanel.module';
import { EDITPANEL } from 'src/shared/editpanel/token/editpanel.token';
import { CardsService } from './cards.services';

function cardsServiceFactory(): CardsService {
  return new CardsService();
}

@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    EditPanelModule
  ],
  providers: [
    {
      provide: EDITPANEL,
      useFactory: cardsServiceFactory,
      deps: []
    }
  ]
})
export class CardsModule { }
