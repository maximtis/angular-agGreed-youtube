import { Component, ViewChild, ViewContainerRef } from "@angular/core";
import { IToolPanel, IToolPanelParams, GridApi } from "@ag-grid-community/all-modules";

@Component({
  selector: 'custom-stats',
  template: `
        <div style="text-align: center">
        <span>
            <h2><i class="fa fa-calculator"></i> Custom Stats</h2>
            <dl style="font-size: large; padding: 30px 40px 10px 30px">
                <dt class="totalStyle">Total Records Count: <b>{{totalRecordsCount}}</b></dt>
                <dt class="totalStyle">Total Records Selected: <b>{{selectedRowsCount}}</b></dt>
                <button (click)="toggleSelectionMode()">Toggle Selection</button>
            </dl>
        </span>
        </div>`, styles: [
    `            
            .totalStyle {
                padding-bottom: 15px
            }
        `
  ]
})
export class CustomStatsToolPanel implements IToolPanel {
    refresh(): void {
        throw new Error("Method not implemented.");
    }
  private params: IToolPanelParams;

  public totalRecordsCount: number;
  private selectedRowsCount: number;
  private selectionModeOn: boolean;
  private api: GridApi;

  agInit(params: IToolPanelParams): void {
    this.params = params;
    this.totalRecordsCount = 0;
    this.selectedRowsCount = 0;
    this.selectionModeOn = false;

    // calculate stats when new rows loaded, i.e. onModelUpdated
    this.params.api.addEventListener('modelUpdated', this.updateTotals.bind(this));
  }

  updateTotals(): void {
    var totalRecordsNumber = 0;

    this.params.api.forEachNode(function (rowNode) {
      totalRecordsNumber++;
      let data = rowNode.data;
    });

    this.totalRecordsCount = totalRecordsNumber;
  }

  toggleSelectionMode() {
  }
}
