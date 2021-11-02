import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickUpGameDataPageComponent } from './pick-up-game-data-page.component';

describe('PickUpGameDataPageComponent', () => {
  let component: PickUpGameDataPageComponent;
  let fixture: ComponentFixture<PickUpGameDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickUpGameDataPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickUpGameDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
