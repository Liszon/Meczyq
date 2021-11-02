import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteUserToTeamPageComponent } from './invite-user-to-team-page.component';

describe('InviteUserToTeamPageComponent', () => {
  let component: InviteUserToTeamPageComponent;
  let fixture: ComponentFixture<InviteUserToTeamPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteUserToTeamPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteUserToTeamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
