import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsComponent } from './topics.component';
import { TopicsRoutingModule } from './topics-routing.module';
import { EditPanelModule } from 'src/shared/editpanel/editpanel.module';
import { EDITPANEL } from 'src/shared/editpanel/token/editpanel.token';
import { Topicservice } from './topics.service';

function topicServiceFactory(): Topicservice {
  return new Topicservice();
}

@NgModule({
  declarations: [
    TopicsComponent
  ],
  imports: [
    CommonModule,
    TopicsRoutingModule,
    EditPanelModule
  ],
  providers: [
    {
      provide: EDITPANEL,
      useFactory: topicServiceFactory,
      deps: []
    }
  ]
})
export class TopicsModule { }
