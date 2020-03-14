import {AfterContentChecked, AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import {dropdownAnimation} from '../../utils/animations';

@Component({
  animations: [dropdownAnimation],
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit, AfterViewInit, AfterContentChecked {
  public contentShown: boolean;
  public width: number;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.changeWidth();
  }

  constructor() {
    this.contentShown = false;
  }

  public ngOnInit() {
    this.changeWidth();
  }

  public ngAfterContentChecked(): void {
    this.changeWidth();
  }

  public ngAfterViewInit(): void {
    this.changeWidth();
  }

  public toggledContent(): void {
    this.contentShown = !this.contentShown;
  }

  private changeWidth() {
    const dropdownTitleElement = document.getElementById('dropdown-title');

    this.width = dropdownTitleElement.offsetWidth;
  }
}
