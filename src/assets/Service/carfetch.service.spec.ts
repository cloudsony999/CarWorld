import { TestBed } from '@angular/core/testing';

import { CarfetchService } from './carfetch.service';

describe('CarfetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarfetchService = TestBed.get(CarfetchService);
    expect(service).toBeTruthy();
  });
});
