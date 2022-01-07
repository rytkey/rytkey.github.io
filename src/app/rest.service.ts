import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from './constants';
import { Songs } from './Songs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  baseURL : string = Constants.baseURL;
  allSongs : string = "allSongs";
  songData : string = "songData/";
  constructor(private http: HttpClient) { }

  getSongs() {
    return this.http.get<Songs[]>(this.baseURL + this.allSongs);
  }
  getSongData(name : string) {
    return this.http.get<Songs[]>(this.baseURL + this.songData + name);
  }
}
