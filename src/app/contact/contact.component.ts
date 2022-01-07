import { Component, OnInit } from '@angular/core';
import { Constants } from '../constants';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  youtubeChannel : string = Constants.youtubeChannel;
  facebook : string = Constants.facebook;
  instagram : string = Constants.instagram;
  portfolio : string = Constants.portfolio;
  
  constructor() { }

  ngOnInit(): void {
  }
  model: any = {};

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }
}
