import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
  }

  public scrollTop(): void {
    document.querySelector('#navbar').scrollIntoView({behavior: 'smooth', block: 'start'});
  }

}
