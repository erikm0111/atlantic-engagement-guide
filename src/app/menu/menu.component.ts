import { Component, OnInit } from '@angular/core';
import {menuAnimation} from '../utils/animations';
import {QuoteService} from '../services/quote.service';

@Component({
  animations: [menuAnimation],
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public showContent: boolean;

  constructor(
    private quoteService: QuoteService
  ) { }

  ngOnInit() {
    this.quoteService.getShowQuoteObservable().subscribe(
      showQuote => this.showContent = !showQuote
    );
  }

}
