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

@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    CustomStatsToolPanel,
    ThumbnailRenderer,
    LinkRenderer
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([CustomStatsToolPanel, ThumbnailRenderer, LinkRenderer]),
    HttpClientModule
  ],
  providers: [YoutubeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
