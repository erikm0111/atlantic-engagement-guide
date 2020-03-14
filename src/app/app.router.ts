import {Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {GuideComponent} from './guide/guide.component';
import {MenuComponent} from './menu/menu.component';
import {IntroGuard} from './services/intro.guard';
import {IntroComponent} from './intro/intro.component';
import {QuoteGuard} from './services/quote.guard';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MenuComponent,
        canActivate: [IntroGuard, QuoteGuard]
      },
      {
        path: 'guide',
        pathMatch: 'full',
        component: GuideComponent,
        canActivate: [IntroGuard, QuoteGuard]
      },
      {
        path: 'intro',
        pathMatch: 'full',
        component: IntroComponent,
        canActivate: [QuoteGuard]
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
