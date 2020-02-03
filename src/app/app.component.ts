import { Component, OnInit } from '@angular/core';
import { YoutubeApiService } from '../services/youtube-api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  constructor() { }

  async ngOnInit() { }

}
