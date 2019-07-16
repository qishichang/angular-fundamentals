import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../../user/shared';
import { ISession, EventService } from '../../events';

@Component({
  selector: 'event-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchTerm = '';

  foundSessions: ISession[];

  constructor(public authService: AuthService,
    private eventService: EventService) { }

  ngOnInit() {
  }

  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    });
  }
}
