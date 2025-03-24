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
});
