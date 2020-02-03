import { Component } from "@angular/core";
import { IToolPanel, IToolPanelParams } from "@ag-grid-community/all-modules";
import { GridColumnsDefinitionService } from '../../../../services/columns-definitions.service';

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

  constructor(private _gridColumnsDefinitionService: GridColumnsDefinitionService) { }

    refresh(): void {}
  private params: IToolPanelParams;

  public totalRecordsCount: number;
  private selectedRowsCount: number;
  private selectionModeOn: boolean;

  agInit(params: IToolPanelParams): void {
    this.params = params;
    this.totalRecordsCount = 0;
    this.selectedRowsCount = 0;
    this.selectionModeOn = false;

    this.params.api.addEventListener('rowSelected', this.updateTotals.bind(this));
    this.params.api.addEventListener('modelUpdated', this.updateTotals.bind(this));
  }

  updateTotals(): void {
    var totalRecordsNumber = 0;
    var selectedRowsNumber = 0;

    this.params.api.forEachNode(function (rowNode) {
      totalRecordsNumber++;
      if (rowNode.isSelected()) {
        selectedRowsNumber++
      }
    });

    this.selectedRowsCount = selectedRowsNumber;
    this.totalRecordsCount = totalRecordsNumber;
  }

  toggleSelectionMode() {
    if (this.selectionModeOn) {
      this.params.api.forEachNode(function (rowNode) {
        rowNode.selectThisNode(false);
      });
    }
    this.selectionModeOn = !this.selectionModeOn;

    this._gridColumnsDefinitionService.getColumnApi().setColumnVisible("selection", this.selectionModeOn);

  }
}
