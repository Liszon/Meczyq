import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTextChatPageComponent } from './create-text-chat-page.component';

describe('CreateTextChatPageComponent', () => {
  let component: CreateTextChatPageComponent;
  let fixture: ComponentFixture<CreateTextChatPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTextChatPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTextChatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
