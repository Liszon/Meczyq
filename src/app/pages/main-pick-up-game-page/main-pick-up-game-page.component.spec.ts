import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPickUpGamePageComponent } from './main-pick-up-game-page.component';

describe('MainPickUpGamePageComponent', () => {
  let component: MainPickUpGamePageComponent;
  let fixture: ComponentFixture<MainPickUpGamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPickUpGamePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPickUpGamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
