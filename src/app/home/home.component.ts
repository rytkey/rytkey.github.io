import { Component, OnInit } from '@angular/core';
import { Constants } from '../constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  youtubeChannel : string = Constants.youtubeChannel;
  facebook : string = Constants.facebook;
  instagram : string = Constants.instagram;
  portfolio : string = Constants.portfolio;
  
  constructor() { }

  ngOnInit(): void {
  }

}
