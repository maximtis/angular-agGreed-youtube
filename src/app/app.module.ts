import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchResultComponent } from './search-result/search-result.component';
import { YoutubeApiService } from '../services/youtube-api.service';
import { CustomStatsToolPanel } from './common/ag-grid-components/toolbar/toolbar.component';
import { ThumbnailRenderer } from './common/ag-grid-components/renderers/thumbnail-renderer';
import { LinkRenderer } from './common/ag-grid-components/renderers/link-renderer';
import { CheckRenderer } from './common/ag-grid-components/renderers/check-renderer';
import { CheckBoxHeader } from './common/ag-grid-components/headers/checkbox-header';
import { GridColumnsDefinitionService } from '../services/columns-definitions.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    CustomStatsToolPanel,
    ThumbnailRenderer,
    LinkRenderer,
    CheckRenderer,
    CheckBoxHeader
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([CustomStatsToolPanel, ThumbnailRenderer, LinkRenderer, CheckRenderer, CheckBoxHeader]),
    HttpClientModule
  ],
  providers: [YoutubeApiService, GridColumnsDefinitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
