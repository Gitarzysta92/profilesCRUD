import { TestBed } from '@angular/core/testing';

import { PartnershipService } from './partnership.service';

describe('PartnershipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartnershipService = TestBed.get(PartnershipService);
    expect(service).toBeTruthy();
  });
});
