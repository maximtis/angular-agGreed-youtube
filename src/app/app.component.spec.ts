import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GridColumnsDefinitionService } from '../services/columns-definitions.service';
import { CustomStatsToolPanel } from './common/ag-grid-components/toolbar/toolbar.component';
import { LinkRenderer } from './common/ag-grid-components/renderers/link-renderer';
import { ThumbnailRenderer } from './common/ag-grid-components/renderers/thumbnail-renderer';
import { CheckRenderer } from './common/ag-grid-components/renderers/check-renderer';
import { CheckBoxHeader } from './common/ag-grid-components/headers/checkbox-header';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { SearchResultModule } from './search-result/search-result.module';
import { YoutubeApiService } from '../services/youtube-api.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        SearchResultModule
      ],
      providers: [YoutubeApiService, GridColumnsDefinitionService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
