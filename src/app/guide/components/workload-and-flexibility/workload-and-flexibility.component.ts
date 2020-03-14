import {Component} from '@angular/core';
import {AbstractComponent} from '../abstract/abstract.component';

@Component({
  selector: 'app-workload-and-flexibility',
  templateUrl: './workload-and-flexibility.component.html',
  styleUrls: ['./workload-and-flexibility.component.scss']
})
export class WorkloadAndFlexibilityComponent extends AbstractComponent {

  constructor() {
    super();
  }
}
