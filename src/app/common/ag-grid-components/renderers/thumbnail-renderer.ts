import {Component} from "@angular/core";
import { ICellRendererParams } from 'ag-grid-community';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
    selector: 'thumbnail-cell',
  template: `<img [src]="imgSrc" alt="thumbnail-default">`
})
export class ThumbnailRenderer implements ICellRendererAngularComp {
  private params: ICellRendererParams;
  private imgSrc: string;

  agInit(params: ICellRendererParams ): void {
    this.params = params;
    this.imgSrc = this.params.value;
  }

  refresh(): boolean {
      return false;
  }
}
