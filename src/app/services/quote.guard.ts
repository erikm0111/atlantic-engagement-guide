import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {QuoteService} from './quote.service';

@Injectable({
  providedIn: 'root'
})
export class QuoteGuard implements CanActivate {

  constructor(
    private quoteService: QuoteService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (state.url !== '/') {
      this.quoteService.setQuoteShown();
    }

    return true;
  }
}
