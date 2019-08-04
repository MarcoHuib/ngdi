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
  public editValue = {} as IEdit;

  constructor(
    @Inject(EDITPANEL) private readonly editPanelFacade: IEditPanel<IEdit>
  ) { }

  ngOnInit() {
  }

  public onSubmit(): void {
    if (this.editValue.title && this.editValue.description) {
      const submitValue = { ...this.editValue, image: `https://picsum.photos/200/200?random=${this.randomNumber()}` } as IEdit;
      this.editValue = {} as IEdit;
      this.editPanelFacade.add(submitValue);
    }
  }

private randomNumber(): number {
  return Math.floor(Math.random() * 10) + 1;
}

}
