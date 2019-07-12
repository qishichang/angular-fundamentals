import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {

  @Input() sessions: ISession[];
  @Input() filterBy: string;

  availableSessions: ISession[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
    if (this.sessions) {
      this.filterSessions(this.filterBy);
    }
  }

  filterSessions(filter: string) {
    if (filter === 'all') {
      this.availableSessions = this.sessions.slice(0);
    } else {
      this.availableSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }
}
