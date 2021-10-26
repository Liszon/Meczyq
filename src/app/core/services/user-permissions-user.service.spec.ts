import { TestBed } from '@angular/core/testing';

import { UserPermissionsUserService } from './user-permissions-user.service';

describe('UserPermissionsUserService', () => {
  let service: UserPermissionsUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPermissionsUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
