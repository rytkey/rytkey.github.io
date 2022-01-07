import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Constants } from '../constants';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @Input()
  params : any;
  songData: any;
  notes : any[] = [];
  youtubeChannel : string = Constants.youtubeChannel;
  facebook : string = Constants.facebook;
  instagram : string = Constants.instagram;
  portfolio : string = Constants.portfolio;
  constructor(private route: ActivatedRoute, public rs : RestService, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.params = params;
    })
    this.rs.getSongData(this.params.object).subscribe((response) => {
      this.songData = response;
      this.notes = this.songData.notes;
    });
  }

}
