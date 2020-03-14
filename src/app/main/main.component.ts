import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public showBackgroundCover: boolean;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.routeChanged();
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.routeChanged();
      }
    });
  }

  private routeChanged() {
    const route = this.router.url.split('?')[0];
    this.showBackgroundCover = route !== '/guide';
  }
}
