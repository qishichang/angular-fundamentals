/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EventResolverService } from './event-resolver.service';

describe('Service: EventResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventResolverService]
    });
  });

  it('should ...', inject([EventResolverService], (service: EventResolverService) => {
    expect(service).toBeTruthy();
  }));
});
