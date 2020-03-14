import {Component} from '@angular/core';
import {AbstractComponent} from '../abstract/abstract.component';

@Component({
  selector: 'app-leadership-and-development',
  templateUrl: './learning-and-development.component.html',
  styleUrls: ['./learning-and-development.component.scss']
})
export class LearningAndDevelopmentComponent extends AbstractComponent {

  constructor() {
    super();
  }
}
