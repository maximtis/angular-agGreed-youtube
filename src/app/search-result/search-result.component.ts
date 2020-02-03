import { Component, OnInit } from '@angular/core';
import { YoutubeApiService } from '../../services/youtube-api.service';
import { CustomStatsToolPanel } from '../common/ag-grid-components/toolbar/toolbar.component';
import { ModuleRegistry, AllModules } from "@ag-grid-enterprise/all-modules";

ModuleRegistry.registerModules(AllModules);

import "@ag-grid-enterprise/clipboard"
import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css";
import { GetContextMenuItemsParams } from 'ag-grid-community';
import { ThumbnailRenderer } from '../common/ag-grid-components/renderers/thumbnail-renderer';
import { LinkRenderer } from '../common/ag-grid-components/renderers/link-renderer';
import { CheckRenderer } from '../common/ag-grid-components/renderers/check-renderer';
import { CheckBoxHeader } from '../common/ag-grid-components/headers/checkbox-header';
import { GridColumnsDefinitionService } from '../../services/columns-definitions.service';
import { SearchResponseModel } from '../../models/youtube-api/search/search-response.model';
import { SearchResultItemModel } from '../../models/search-result-item/search-item-title.model';
import { SearchResultItemTitleModel } from '../../models/search-result-item/search-item.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})

export class SearchResultComponent implements OnInit {

  constructor(private _youtubeApiService: YoutubeApiService, private _gridColumnsDefinitionService: GridColumnsDefinitionService) { }

  async ngOnInit() { await this.getGoogleYoutubeData(); }

  youTubeApiResponse: SearchResponseModel;
  rowData: Array<SearchResultItemModel>;
  columnDefs = [
    { headerName: 'Selection', colId: "selection", hide: true, cellRenderer: "checkRenderer", headerComponent: "checkBoxHeader", width: 50 },
    { headerName: 'PublishedAt', field: 'publishedAt', width: 150 },
    { headerName: 'Video Title', field: 'title', width: 350, cellRenderer: "linkRenderer" },
    { headerName: 'Description', field: 'description', width: 450 },
    { headerName: '', field: 'thumbnail', width: 250, cellRenderer: "thumbnailRenderer" }
  ];

  modules:any[] = AllModules;
  icons = { "custom-stats": '<span class="ag-icon ag-icon-custom-stats"></span>' };
  frameworkComponents = {
    customStatsToolPanel: CustomStatsToolPanel,
    thumbnailRenderer: ThumbnailRenderer,
    linkRenderer: LinkRenderer,
    checkRenderer: CheckRenderer,
    checkBoxHeader: CheckBoxHeader
  };

  sideBar = {
    toolPanels: [
      {
        id: "customStats",
        labelDefault: "Custom Stats",
        labelKey: "customStats",
        iconKey: "custom-stats",
        toolPanel: "customStatsToolPanel"
      }
    ],
    defaultToolPanel: "customStats"
  }

  getContextMenuItems(params: GetContextMenuItemsParams) {
    let defaultContextMenu: Array<any> = [
      "copy",
      "copyWithHeaders",
      "paste"
    ];

    if (params.column && params.column.getColDef().field == 'title') {
      defaultContextMenu.push({
        name: "Open in new tab",
        action: function () {
          window.open(params.value.link, "_blank");
        }
      });
    }
    return defaultContextMenu;
  }

  onGridReady(params) {
    this._gridColumnsDefinitionService.setColumnApi(params.columnApi);
  }


  async getGoogleYoutubeData() {
    this.youTubeApiResponse = await this._youtubeApiService.getData().toPromise();
    this.rowData = this.youTubeApiResponse.items.map((val) => {
      return <SearchResultItemModel>{
        publishedAt: val.snippet.publishedAt,
        title: <SearchResultItemTitleModel>{
          text: val.snippet.title,
          link: `${"https://www.youtube.com/watch?v="}${val.id.videoId}`
        },
        description: val.snippet.description,
        thumbnail: val.snippet.thumbnails.default.url
      };
    });
  }
}
