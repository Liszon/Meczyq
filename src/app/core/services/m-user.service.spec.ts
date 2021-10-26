import { TestBed } from '@angular/core/testing';

import { MUserService } from './m-user.service';

describe('MUserService', () => {
  let service: MUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
