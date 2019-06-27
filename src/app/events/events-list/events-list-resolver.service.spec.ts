/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EventsListResolver } from './events-list-resolver.service';

describe('Service: EventsListResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventsListResolver]
    });
  });

  it('should ...', inject([EventsListResolver], (service: EventsListResolver) => {
    expect(service).toBeTruthy();
  }));
});
