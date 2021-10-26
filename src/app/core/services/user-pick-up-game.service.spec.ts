import { TestBed } from '@angular/core/testing';

import { UserPickUpGameService } from './user-pick-up-game.service';

describe('UserPickUpGameService', () => {
  let service: UserPickUpGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPickUpGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
