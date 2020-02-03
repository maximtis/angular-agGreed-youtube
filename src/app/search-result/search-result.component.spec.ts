import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultComponent } from './search-result.component';
import { ThumbnailRenderer } from '../common/ag-grid-components/renderers/thumbnail-renderer';
import { AgGridModule } from 'ag-grid-angular';
import { LinkRenderer } from '../common/ag-grid-components/renderers/link-renderer';
import { CheckRenderer } from '../common/ag-grid-components/renderers/check-renderer';
import { CheckBoxHeader } from '../common/ag-grid-components/headers/checkbox-header';
import { GridColumnsDefinitionService } from '../../services/columns-definitions.service';
import { YoutubeApiService } from '../../services/youtube-api.service';
import { LinkRendererModule } from '../common/ag-grid-components/renderers/link-renderer.module';
import { CheckRendererModule } from '../common/ag-grid-components/renderers/check-renderer.module';
import { ThumbnailRendererModule } from '../common/ag-grid-components/renderers/thumbnail-renderer.module';
import { CheckBoxHeaderModule } from '../common/ag-grid-components/headers/checkbox-header.module';
import { CustomStatsToolPanelModule } from '../common/ag-grid-components/toolbar/toolbar.module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('SearchResultComponent', () => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CustomStatsToolPanelModule,
        LinkRendererModule,
        CheckRendererModule,
        ThumbnailRendererModule,
        CheckBoxHeaderModule,
        HttpClientTestingModule,
        AgGridModule.withComponents([]),],
      declarations: [SearchResultComponent],
      providers: [GridColumnsDefinitionService, YoutubeApiService],
    })
    .compileComponents();
  }));

  let service: YoutubeApiService;
  let http: HttpTestingController;

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(YoutubeApiService);
    http = TestBed.get(HttpTestingController);
  });

  it('should be created api service', () => {
    expect(service).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have column definitions', () => {
    expect(component.columnDefs.length).toBeGreaterThan(0);
  });

  it('should have column id "selection"', () => {
    expect(component.columnDefs.find(x => x.colId == "selection")).toBeTruthy();
  });

  it('should have defaulr side bar panel', () => {
    expect(component.sideBar.defaultToolPanel).toEqual("customStats");
  });

  it('should have side bar', () => {
    expect(component.sideBar.toolPanels.length).toBeGreaterThan(0);
  });

});
