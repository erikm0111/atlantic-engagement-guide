import { Injectable } from '@angular/core';
import {QuoteService} from './quote.service';

@Injectable({
  providedIn: 'root'
})
export class IntroService {
  private static IntroShownKey = 'intro-shown';

  private introShown: boolean;
  private displayIntro: boolean;

  constructor(
    private quoteService: QuoteService
  ) {
    this.introShown = !!localStorage.getItem(IntroService.IntroShownKey);
    this.displayIntro = false;
  }

  public getIntroShown(): boolean {
    return this.introShown;
  }

  public setIntroShown(): void {
    this.introShown = true;
    localStorage.setItem(IntroService.IntroShownKey, String(this.introShown));
  }
}
