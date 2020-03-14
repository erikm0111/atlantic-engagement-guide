import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss']
})
export class LanguagePickerComponent implements OnInit {

  public languages: string[];

  constructor(
    private translateService: TranslateService
  ) {
    this.languages = environment.languages;
  }

  public ngOnInit() {
  }

  public changeLanguage(language: string) {
    this.translateService.use(language);
  }

}
