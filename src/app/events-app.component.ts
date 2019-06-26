import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <event-navbar></event-navbar>
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
