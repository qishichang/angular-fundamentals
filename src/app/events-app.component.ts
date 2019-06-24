import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <event-navbar></event-navbar>
    <events-list></events-list>
  `
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
