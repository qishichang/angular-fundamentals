/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JQueryService } from './jQuery.service';

describe('Service: JQuery', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JQueryService]
    });
  });

  it('should ...', inject([JQueryService], (service: JQueryService) => {
    expect(service).toBeTruthy();
  }));
});
