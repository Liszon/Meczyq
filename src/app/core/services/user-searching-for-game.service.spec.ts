import { TestBed } from '@angular/core/testing';

import { UserSearchingForGameService } from './user-searching-for-game.service';

describe('UserSearchingForGameService', () => {
  let service: UserSearchingForGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSearchingForGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
