import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTextChatPageComponent } from './edit-text-chat-page.component';

describe('EditTextChatOageComponent', () => {
  let component: EditTextChatPageComponent;
  let fixture: ComponentFixture<EditTextChatPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTextChatPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTextChatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
