import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteTeamToTournamentPageComponent } from './invite-team-to-tournament-page.component';

describe('InviteTeamToTournamentPageComponent', () => {
  let component: InviteTeamToTournamentPageComponent;
  let fixture: ComponentFixture<InviteTeamToTournamentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteTeamToTournamentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteTeamToTournamentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
