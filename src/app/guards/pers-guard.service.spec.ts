import { TestBed } from '@angular/core/testing';

import { PersGuardService } from './pers-guard.service';

describe('PersGuardService', () => {
  let service: PersGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
