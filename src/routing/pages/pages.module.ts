import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { EditPanelModule } from 'src/shared/editpanel/editpanel.module';
import { EDITPANEL } from 'src/shared/editpanel/token/editpanel.token';
import { PagesService } from './pages.services';

function pageServiceFactory(): PagesService {
  return new PagesService();
}

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    EditPanelModule
  ],
  providers: [
    {
      provide: EDITPANEL,
      useFactory: pageServiceFactory,
      deps: []
    }
  ]
})
export class PagesModule { }
