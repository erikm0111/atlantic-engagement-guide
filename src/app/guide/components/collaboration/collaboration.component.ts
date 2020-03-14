import {Component} from '@angular/core';
import {AbstractComponent} from '../abstract/abstract.component';

@Component({
  selector: 'app-collaboration',
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.scss']
})
export class CollaborationComponent extends AbstractComponent {

  constructor() {
    super();
  }
}
