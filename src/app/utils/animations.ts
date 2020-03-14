import {animate, AnimationTriggerMetadata, query, style, transition, trigger} from '@angular/animations';

export const dropdownAnimation: AnimationTriggerMetadata = trigger('dropdown', [
  transition(':enter', [
    style({height: 0}),
    query('.dropdown-text', [
      style({opacity: 0})
    ]),
    query('.dropdown-close', [
      style({opacity: 0})
    ]),
    animate('250ms', style({height: '*'})),
    query('.dropdown-text', [
      animate('125ms', style({opacity: 1}))
    ]),
    query('.dropdown-close', [
      animate('75ms', style({opacity: 1}))
    ])
  ]),
  transition(':leave', [
    query('.dropdown-close', [
      animate('75ms', style({opacity: 0}))
    ]),
    query('.dropdown-text', [
      animate('125ms', style({opacity: 0}))
    ]),
    animate('250ms', style({height: 0}))
  ])
]);

export const menuAnimation: AnimationTriggerMetadata = trigger('menu', [
  transition('* => true', [
    query('.dropdown-title', [
      style({opacity: 0})
    ]),
    query('.senior-leadership', [
      style({opacity: 0})
    ]),
    query('.talent-management', [
      style({opacity: 0})
    ]),
    query('.collaboration', [
      style({opacity: 0})
    ]),
    query('.empowerment', [
      style({opacity: 0})
    ]),
    query('.learning-and-development', [
      style({opacity: 0})
    ]),
    query('.supervision', [
      style({opacity: 0})
    ]),
    query('.rewards-and-recognition', [
      style({opacity: 0})
    ]),
    query('.workload-and-flexibility', [
      style({opacity: 0})
    ]),


    query('.dropdown-title', [
      animate('150ms', style({opacity: 1}))
    ]),
    query('.senior-leadership', [
      animate('75ms', style({opacity: 1}))
    ]),
    query('.talent-management', [
      animate('75ms', style({opacity: 1}))
    ]),
    query('.collaboration', [
      animate('75ms', style({opacity: 1}))
    ]),
    query('.empowerment', [
      animate('75ms', style({opacity: 1}))
    ]),
    query('.learning-and-development', [
      animate('75ms', style({opacity: 1}))
    ]),
    query('.supervision', [
      animate('75ms', style({opacity: 1}))
    ]),
    query('.rewards-and-recognition', [
      animate('75ms', style({opacity: 1}))
    ]),
    query('.workload-and-flexibility', [
      animate('75ms', style({opacity: 1}))
    ])
  ])
]);

export const quoteAnimation: AnimationTriggerMetadata = trigger('quote', [
  transition(':enter', [
    query('.quote-text', [
      style({opacity: 0})
    ]),
    query('.quote-author', [
      style({opacity: 0})
    ]),
    query('.quote-metadata', [
      style({opacity: 0})
    ]),
    query('.close-button', [
      style({opacity: 0})
    ]),

    query('.quote-text', [
      animate('300ms', style({opacity: 1}))
    ]),
    query('.quote-author', [
      animate('300ms', style({opacity: 1}))
    ]),
    query('.quote-metadata', [
      animate('300ms', style({opacity: 1}))
    ]),
    query('.close-button', [
      animate('300ms', style({opacity: 1}))
    ])
  ]),
  transition(':leave', [
    query('.close-button', [
      animate('150ms', style({opacity: 0}))
    ]),
    query('.quote-metadata', [
      animate('150ms', style({opacity: 0}))
    ]),
    query('.quote-author', [
      animate('150ms', style({opacity: 0}))
    ]),
    query('.quote-text', [
      animate('150ms', style({opacity: 0}))
    ]),
  ]),
]);
