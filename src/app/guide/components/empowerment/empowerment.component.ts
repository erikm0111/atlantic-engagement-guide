import {Component} from '@angular/core';
import {AbstractComponent} from '../abstract/abstract.component';

@Component({
  selector: 'app-empowerment',
  templateUrl: './empowerment.component.html',
  styleUrls: ['./empowerment.component.scss']
})
export class EmpowermentComponent extends AbstractComponent {

  constructor() {
    super();
  }
}
