import {Component} from "@angular/core";
import { ICellRendererParams } from 'ag-grid-community';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'checkbox-cell',
  template: `<input type="checkbox" [checked]="params.node.selected" (change)="checkValue($event)" />`
})
export class CheckRenderer implements ICellRendererAngularComp {
  private params: ICellRendererParams;
  public isChecked: boolean=false;

  agInit(params: ICellRendererParams ): void {
    this.params = params;
  }

  checkValue(event: any) {
    //TODO: notify state
    this.params.node.selectThisNode(event.currentTarget.checked);
    console.log(this.isChecked);
  }

  refresh(): boolean {
      return false;
  }
}
