/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import { SessionListComponent } from './session-list.component';
import { AuthService } from 'app/user/shared';
import { VoterService, DurationPipe } from '../shared';
import { UpvoteComponent, CollapsibleWellComponent } from 'app/shared/components';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let fixture: ComponentFixture<SessionListComponent>;
  let element: HTMLElement;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    const mockAuthService = {
      isAuthenticated: () => true,
      currentUser: { userName: 'Joe'}
    };
    const mockVoterService = {
      userHasVoted: () => true
    };
    TestBed.configureTestingModule({
      declarations: [
        SessionListComponent,
        UpvoteComponent,
        DurationPipe,
        CollapsibleWellComponent
      ],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule],
      providers: [{
        provide: AuthService,
        useValue: mockAuthService
      }, {
        provide: VoterService,
        useValue: mockVoterService
      }],
      schemas: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  });

  it('should have the correct session title', () => {
    component.sessions = [
      {
        id: 3,
        name: 'Session 1',
        presenter: 'Joe',
        duration: 1,
        level: 'Beginner',
        abstract: 'abstract',
        voters: ['john', 'bob']
      }];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;

      component.ngOnChanges();
      fixture.detectChanges();

      // expect(element.querySelector('[well-title]').textContent)
      //   .toContain('Session 1');

      expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent)
        .toContain('Session 1');
  });
});
