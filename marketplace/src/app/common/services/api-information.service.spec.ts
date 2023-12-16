import { TestBed } from '@angular/core/testing';

import { ApiInformationService } from './api-information.service';

describe('ApiMatrixService', () => {
  let service: ApiInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
