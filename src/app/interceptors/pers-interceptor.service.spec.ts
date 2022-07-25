import { TestBed } from '@angular/core/testing';

import { PersInterceptorService } from './pers-interceptor.service';

describe('PersInterceptorService', () => {
  let service: PersInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
