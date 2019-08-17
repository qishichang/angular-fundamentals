/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import { EventDetailsComponent } from './event-details.component';
import { IEvent, ISession } from '../shared';
import { of } from 'rxjs';

describe('EventDetailsComponent', () => {
  let component: EventDetailsComponent;
  let mockEventService;

  beforeEach(() => {
    mockEventService = jasmine.createSpyObj(['saveEvent']);
    component = new EventDetailsComponent(mockEventService, null);
    component.event = <IEvent>{ sessions: [] };
  });

  it('should add a new session when saveNewSession is called ', () => {
    mockEventService.saveEvent.and.returnValue(of(true));
    component.saveNewSession(<ISession>{
      name: 'Session 1',
      presenter: 'Joe',
      duration: 1,
      level: 'Beginner',
      abstract: 'abstract',
      voters: ['john', 'bob']
    });

    expect(component.event.sessions.length).toBe(1);
  });
});
