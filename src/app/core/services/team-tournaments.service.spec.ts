import { TestBed } from '@angular/core/testing';

import { TeamTournamentsService } from './team-tournaments.service';

describe('TeamTournamentsService', () => {
  let service: TeamTournamentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamTournamentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
