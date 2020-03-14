import {Component, OnInit} from '@angular/core';
import {IntroService} from '../services/intro.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor(
    private introService: IntroService,
  ) {
  }

  public ngOnInit(): void {
    this.introService.setIntroShown();
  }
}
