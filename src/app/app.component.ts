import { Component, OnInit } from '@angular/core';
import { AppComponentService } from './app.component.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  constructor(private _appComponentService: AppComponentService) { }

  async ngOnInit() { await this.getGoogleYoutubeData(); }

  dataGridItems: any;

    title = 'app';

    columnDefs = [
      { headerName: 'PublishedAt', field: 'publishedAt' },
      { headerName: 'Title', field: 'title' },
      { headerName: 'Description', field: 'description' },
      { headerName: 'Thumbnail', field: 'thumbnail'  }
    ];

    rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];

    
  async getGoogleYoutubeData() {
    this.dataGridItems = await this._appComponentService.getData().toPromise();
    debugger;
    this.rowData = this.dataGridItems.items.map((val) => {
      return {
        publishedAt: val.snippet.publishedAt,
        title: val.snippet.title,
        description: val.snippet.description,
        thumbnail: val.snippet.thumbnails.default.url
      };
    });
  }
}
