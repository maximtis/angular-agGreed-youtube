import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponseModel } from '../models/youtube-api/search/search-response.model';

@Injectable()
export class YoutubeApiService {

  constructor(private http: HttpClient) { }

  getData(): Observable<SearchResponseModel> {
    return this.http.get<any>('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk&maxResults=50&type=video&part=snippet&q=john');
  }
}
