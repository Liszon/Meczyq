import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeUserPasswordPageComponent } from './change-user-password-page.component';

describe('ChangeUserPasswordPageComponent', () => {
  let component: ChangeUserPasswordPageComponent;
  let fixture: ComponentFixture<ChangeUserPasswordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeUserPasswordPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeUserPasswordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
