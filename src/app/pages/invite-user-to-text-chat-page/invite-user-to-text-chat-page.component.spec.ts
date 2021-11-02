import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteUserToTextChatPageComponent } from './invite-user-to-text-chat-page.component';

describe('InviteUserToTextChatPageComponent', () => {
  let component: InviteUserToTextChatPageComponent;
  let fixture: ComponentFixture<InviteUserToTextChatPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteUserToTextChatPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteUserToTextChatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
