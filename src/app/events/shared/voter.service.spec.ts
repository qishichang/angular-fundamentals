/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { VoterService } from './voter.service';
import { ISession } from './event.model';
import { of } from 'rxjs';

describe('Service: Voter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        VoterService,
        {
          provide: HttpClient,
          useValue: jasmine.createSpyObj('mockHttp', ['delete', 'post'])
        }
      ],
    });
  });

  it('should ...', inject([VoterService], (service: VoterService) => {
    expect(service).toBeTruthy();
  }));

  describe('deleteVoter', () => {
    it('should remove the voter from the list of voters',
      inject([VoterService, HttpClient],
        (service: VoterService, mockHttp: HttpClient) => {
          const session = { id: 6, voters: ['joe', 'john'] };
          (<any>mockHttp).delete.and.returnValue(of(false));
          service.deleteVoter(3, <ISession>session, 'joe');

          expect(session.voters.length).toBe(1);
          expect(session.voters[0]).toBe('john');
        }));
  });
});
