import { TestBed } from '@angular/core/testing';

import { ApiMatrixService } from './api-matrix.service';

describe('ApiMatrixService', () => {
  let service: ApiMatrixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMatrixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
