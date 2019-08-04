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
  private static Example: IEdit = {
    title: 'Topic title',
    image: 'https://picsum.photos/200/300?random=1',
    description: "Some quick example text to build on the card title and make up the bulk of the card's content."
  };

  constructor(
    @Inject(EDITPANEL) private readonly editPanelFacade: IEditPanel<IEdit>
  ) { }

  ngOnInit() {
  }

  public Submit(): void {
    this.editPanelFacade.add(EditPanelComponent.Example);
  }

}
