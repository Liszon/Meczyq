import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchingGameComponent } from './user-searching-game.component';

describe('UserSearchingGameComponent', () => {
  let component: UserSearchingGameComponent;
  let fixture: ComponentFixture<UserSearchingGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSearchingGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchingGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
