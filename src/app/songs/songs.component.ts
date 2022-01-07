import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Songs } from '../Songs';
@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  name : any;
  movie : any;
  musicDirector : any;
  singer : any;
  songs : Songs[] = [];
  p : number = 1;
  constructor(public rs : RestService) { 
  }
  ngOnInit(): void {
    this.rs.getSongs().subscribe((response) => {
      this.songs = response;
    });
  }
  searchSong() {
    if(this.name == "") {
      this.ngOnInit()
    }
    else {
        this.songs = this.songs.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase())
      })
    }
  }
  searchMovie() {
    if(this.movie == "") {
      this.ngOnInit()
    }
    else {
        this.songs = this.songs.filter(res => {
        return res.movie.toLocaleLowerCase().match(this.movie.toLocaleLowerCase())
      })
    }
  }
  searchMD() {
    if(this.musicDirector == "") {
      this.ngOnInit()
    }
    else {
        this.songs = this.songs.filter(res => {
        return res.musicDirector.toLocaleLowerCase().match(this.musicDirector.toLocaleLowerCase())
      })
    }
  }
  searchSinger() {
    if(this.singer == "") {
      this.ngOnInit()
    }
    else {
        this.songs = this.songs.filter(res => {
        return res.singer.toLocaleLowerCase().match(this.singer.toLocaleLowerCase())
      })
    }
  }
  key : string ="id";
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
