import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public showTitle: boolean;
  public showIntroButton: boolean;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.setupNavbar(this.router.url);
    this.router.events.subscribe(
      e => {
        if (e instanceof NavigationEnd) {
          this.setupNavbar(e.url);
        }
      }
    );
  }

  private setupNavbar(url: string) {
    if (url === '/intro') {
      this.showTitle = false;
      this.showIntroButton = false;
    } else {
      this.showTitle = true;
      this.showIntroButton = true;
    }
  }
}
