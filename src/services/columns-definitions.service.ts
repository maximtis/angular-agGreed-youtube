import { Injectable } from '@angular/core';
import { ColDef, ColumnApi } from 'ag-grid-community';

@Injectable()
export class GridColumnsDefinitionService {
  constructor() {}
  columnApi: ColumnApi;

  setColumnApi(columnApi: ColumnApi) {
    this.columnApi = columnApi;
  }
  getColumnApi() {
    return this.columnApi;
  }
}
