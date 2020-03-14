import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {

  public components: string[];
  public activeComponent: string;
  public icons: any;
  public activeIcon: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.components = [
      'senior-leadership',
      'talent-management',
      'collaboration',
      'empowerment',
      'learning-and-development',
      'supervision',
      'rewards-and-recognition',
      'workload-and-flexibility'
    ];
    this.icons = {
      'senior-leadership': 'senior_leadership',
      'talent-management': 'talent_management',
      'collaboration': 'collaboration',
      'empowerment': 'empowerment',
      'learning-and-development': 'learning_and_development',
      'supervision': 'supervision',
      'rewards-and-recognition': 'rewards_and_recognition',
      'workload-and-flexibility': 'workload_and_flexibility'
    };
  }

  public ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      queryParams => {
        this.activeComponent = queryParams['component'];
        this.activeIcon = this.icons[this.activeComponent];
      }
    );
  }

  public changeComponent(component: string) {
    const queryParams: Params = {component: component};
    this.activeIcon = this.icons[component];

    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: queryParams,
        queryParamsHandling: 'merge'
      }
    );
  }

  public isNeighbourComponent(index: number) {
    const activeIndex = this.components.findIndex(c => c === this.activeComponent);
    if (activeIndex === 0) {
      return index === activeIndex + 1;
    } else if (activeIndex === this.components.length - 1) {
      return index === activeIndex - 1;
    } else {
      return index === activeIndex + 1 || index === activeIndex - 1;
    }
  }
}
