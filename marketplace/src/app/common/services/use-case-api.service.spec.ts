import { TestBed } from '@angular/core/testing';

import { UseCaseApiService } from './use-case-api.service';

describe('UseCaseApiService', () => {
  let service: UseCaseApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseCaseApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
