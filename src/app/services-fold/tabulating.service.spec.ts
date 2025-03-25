import { TestBed } from '@angular/core/testing';

import { TabulatingService } from './tabulating.service';

describe('TabulatingService', () => {
  let service: TabulatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabulatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct value for x = 1', () => {
    const result = service.getTab(1, 1, 1);
    expect(result.x[0]).toBe("1");
    expect(parseFloat(result.y[0])).toBeCloseTo(Math.sqrt(2));
  });
});
