import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CardsModule } from '../cards/cards.module';
import { TopicsModule } from '../topics/topics.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardsModule,
    TopicsModule
  ]
})
export class HomeModule { }
