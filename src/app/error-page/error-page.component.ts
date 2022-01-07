import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  url : any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.url = url;
    })
  }
}
