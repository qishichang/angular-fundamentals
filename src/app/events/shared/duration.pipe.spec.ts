/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { DurationPipe } from './duration.pipe';

describe('Pipe: Duration', () => {
  it('should display Half Hour if duration is 1', () => {
    const pipe = new DurationPipe();

    expect(pipe.transform(1)).toEqual('Half Hour');
  });

  it('should display One Hour if duration is 2', () => {
    const pipe = new DurationPipe();

    expect(pipe.transform(2)).toEqual('One Hour');
  });

  it('should display Half Day if duration is 3', () => {
    const pipe = new DurationPipe();

    expect(pipe.transform(3)).toEqual('Half Day');
  });

  it('should display Full Day if duration is 4', () => {
    const pipe = new DurationPipe();

    expect(pipe.transform(4)).toEqual('Full Day');
  });
});
