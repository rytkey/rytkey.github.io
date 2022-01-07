import { Component, OnInit } from '@angular/core';
import { Constants } from '../constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  youtubeChannel : string = Constants.youtubeChannel;
  facebook : string = Constants.facebook;
  instagram : string = Constants.instagram;
  portfolio : string = Constants.portfolio;
  constructor() { }

  ngOnInit(): void {
  }

}
