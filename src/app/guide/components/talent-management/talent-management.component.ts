import {Component} from '@angular/core';
import {AbstractComponent} from '../abstract/abstract.component';

@Component({
  selector: 'app-talent-management',
  templateUrl: './talent-management.component.html',
  styleUrls: ['./talent-management.component.scss']
})
export class TalentManagementComponent extends AbstractComponent {

  constructor() {
    super();
  }
}
