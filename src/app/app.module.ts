import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchResultComponent } from './search-result/search-result.component';
import { YoutubeApiService } from '../services/youtube-api.service';
import { GridColumnsDefinitionService } from '../services/columns-definitions.service';
import { SearchResultModule } from './search-result/search-result.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SearchResultModule
  ],
  providers: [YoutubeApiService, GridColumnsDefinitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
