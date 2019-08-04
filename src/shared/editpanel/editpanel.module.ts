import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPanelComponent } from './editpanel.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditPanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EditPanelComponent
  ]
})
export class EditPanelModule { }
