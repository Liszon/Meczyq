import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteUserToPickUpGameComponent } from './invite-user-to-pick-up-game.component';

describe('InviteUserToPickUpGameComponent', () => {
  let component: InviteUserToPickUpGameComponent;
  let fixture: ComponentFixture<InviteUserToPickUpGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteUserToPickUpGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteUserToPickUpGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
