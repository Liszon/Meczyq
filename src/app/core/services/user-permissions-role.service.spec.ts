import { TestBed } from '@angular/core/testing';

import { UserPermissionsRoleService } from './user-permissions-role.service';

describe('UserPermissionsRoleService', () => {
  let service: UserPermissionsRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPermissionsRoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
