import { TestBed } from '@angular/core/testing';

import { PickUpGameService } from './pick-up-game.service';

describe('PickUpGameService', () => {
  let service: PickUpGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PickUpGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
