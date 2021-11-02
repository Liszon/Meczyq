import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePickUpGamePageComponent } from './create-pick-up-game-page.component';

describe('CreatePickUpGamePageComponent', () => {
  let component: CreatePickUpGamePageComponent;
  let fixture: ComponentFixture<CreatePickUpGamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePickUpGamePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePickUpGamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
