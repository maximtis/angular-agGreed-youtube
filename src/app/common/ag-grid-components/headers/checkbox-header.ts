import {Component, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-loading-overlay',
  template: '<input type="checkbox" [checked]="isChecked" (change)="checkValue($event)" />'
})
export class CheckBoxHeader {
  private params: any;
  private isChecked: boolean = false;

  agInit(params): void {
      this.params = params;
  }

  checkValue(event: any) {
    if (this.isChecked) {
      this.params.api.forEachNode(function (rowNode) {
        rowNode.selectThisNode(false);
      });
    } else {
      this.params.api.forEachNode(function (rowNode) {
        rowNode.selectThisNode(true);
      });
    }
    
    this.isChecked = event.currentTarget.checked;
    console.log(this.isChecked);
  }

}
