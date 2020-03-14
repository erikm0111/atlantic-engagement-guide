import {Component} from '@angular/core';
import {AbstractComponent} from '../abstract/abstract.component';

@Component({
  selector: 'app-senior-leadership',
  templateUrl: './senior-leadership.component.html',
  styleUrls: ['./senior-leadership.component.scss']
})
export class SeniorLeadershipComponent extends AbstractComponent {

  constructor() {
    super();
  }
}
