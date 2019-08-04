import { Component, OnInit, Inject } from '@angular/core';
import { IEditPanel } from './Interface/ieditpanelfacade';
import { EDITPANEL } from './token/editpanel.token';
import { IEdit } from './Interface/iedit.model';

@Component({
  selector: 'ngdi-editpanel',
  templateUrl: './editpanel.component.html',
  styleUrls: ['./editpanel.component.scss']
})
export class EditPanelComponent implements OnInit {

  constructor(
    @Inject(EDITPANEL) private readonly editPanelFacade: IEditPanel<IEdit>
  ) { }

  ngOnInit() {
  }

  public Submit(): void {
    this.editPanelFacade.add(null);
  }

}
