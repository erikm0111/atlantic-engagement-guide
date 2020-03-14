import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private translateService: TranslateService
  ) {
  }

  ngOnInit(): void {
    this.translateService.setDefaultLang(environment.defaultLanguage);
    this.translateService.addLangs(environment.languages);

    const browserLanguage = this.translateService.getBrowserLang();
    const language = environment.languages.find(l => l === browserLanguage) ? browserLanguage : environment.defaultLanguage;
    this.translateService.use(language);
  }
}
