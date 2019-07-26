import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/shared';

@Component({
  selector: 'events-app',
  template: `
    <event-navbar></event-navbar>
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent implements OnInit {
  title = 'ng-fundamentals';

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.checkAuthenticationStatus();
  }
}
