import {Component} from '@angular/core';
import {AbstractComponent} from '../abstract/abstract.component';

@Component({
  selector: 'app-supervision',
  templateUrl: './supervision.component.html',
  styleUrls: ['./supervision.component.scss']
})
export class SupervisionComponent extends AbstractComponent {

  constructor() {
    super();
  }
}
