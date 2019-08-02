import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { PagesModule } from '../pages/pages.module';
import { TopicsModule } from '../topics/topics.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PagesModule,
    TopicsModule
  ]
})
export class HomeModule { }
