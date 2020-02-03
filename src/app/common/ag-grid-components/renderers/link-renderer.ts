import {Component} from "@angular/core";
import { ICellRendererParams } from 'ag-grid-community';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
    selector: 'link-cell',
  template: `<a href="{{link}}">{{text}}</a>`
})
export class LinkRenderer implements ICellRendererAngularComp {
  private params: ICellRendererParams;
  private text: string;
  private link: string;

  agInit(params: ICellRendererParams ): void {
    this.params = params;
    this.text = this.params.value.text;
    this.link = this.params.value.link;
  }

  refresh(): boolean {
      return false;
  }
}
