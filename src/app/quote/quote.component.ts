import {Component, OnDestroy, OnInit} from '@angular/core';
import {QuoteService} from '../services/quote.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {quoteAnimation} from '../utils/animations';

@Component({
  animations: [quoteAnimation],
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit, OnDestroy {

  public showQuote: boolean;
  public quoteNumber: number;

  private showQuoteSubscription: Subscription;

  constructor(
    private quoteService: QuoteService,
    private router: Router
  ) {}

  public ngOnInit() {
    this.showQuoteSubscription = this.quoteService.getShowQuoteObservable().subscribe(
      showQuote => this.showQuote = this.shouldShowQuote(showQuote)
    );

    this.quoteNumber = Math.ceil(Math.random() * 10);
  }

  public ngOnDestroy(): void {
    if (this.showQuoteSubscription && !this.showQuoteSubscription.closed) {
      this.showQuoteSubscription.unsubscribe();
    }
  }

  public close() {
    this.showQuote = false;
  }

  private shouldShowQuote(showQuote: boolean) {
    const isMainRoute = this.router.url === '/';

    return showQuote && isMainRoute;
  }

  public animationEnded() {
    if (!this.showQuote) {
      this.quoteService.setQuoteShown();
    }
  }
}
