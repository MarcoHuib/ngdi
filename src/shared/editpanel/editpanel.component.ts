import { Component, OnInit, Inject } from '@angular/core';
import { IEditPanel } from './Interface/ieditpanelfacade';
import { EDITPANEL } from './token/editpanel.token';

@Component({
  selector: 'ngdi-editpanel',
  templateUrl: './editpanel.component.html',
  styleUrls: ['./editpanel.component.scss']
})
export class EditPanelComponent implements OnInit {

  constructor(
    @Inject(EDITPANEL) private readonly editPanelFacade: IEditPanel
  ) { }

  ngOnInit() {
  }

}
