import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {routes} from './app.router';
import {LanguagePickerComponent} from './navbar/language-picker/language-picker.component';
import {NavbarComponent} from './navbar/navbar.component';
import {LogoComponent} from './navbar/logo/logo.component';
import {GuideComponent} from './guide/guide.component';
import {MenuComponent} from './menu/menu.component';
import {SeniorLeadershipComponent} from './guide/components/senior-leadership/senior-leadership.component';
import {TalentManagementComponent} from './guide/components/talent-management/talent-management.component';
import {CollaborationComponent} from './guide/components/collaboration/collaboration.component';
import {EmpowermentComponent} from './guide/components/empowerment/empowerment.component';
import {LearningAndDevelopmentComponent} from './guide/components/learning-and-development/learning-and-development.component';
import {SupervisionComponent} from './guide/components/supervision/supervision.component';
import {RewardsAndRecognitionComponent} from './guide/components/rewards-and-recognition/rewards-and-recognition.component';
import {WorkloadAndFlexibilityComponent} from './guide/components/workload-and-flexibility/workload-and-flexibility.component';
import {DropdownComponent} from './menu/dropdown/dropdown.component';
import {IntroComponent} from './intro/intro.component';
import {QuoteComponent} from './quote/quote.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {ScrollTopComponent} from './guide/scroll-top/scroll-top.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LanguagePickerComponent,
    NavbarComponent,
    LogoComponent,
    GuideComponent,
    MenuComponent,
    SeniorLeadershipComponent,
    TalentManagementComponent,
    CollaborationComponent,
    EmpowermentComponent,
    LearningAndDevelopmentComponent,
    SupervisionComponent,
    RewardsAndRecognitionComponent,
    WorkloadAndFlexibilityComponent,
    DropdownComponent,
    IntroComponent,
    QuoteComponent,
    ScrollTopComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'ignore'}),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
