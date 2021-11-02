import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPickUpGameDataPageComponent } from './edit-pick-up-game-data-page.component';

describe('EditPickUpGameDataPageComponent', () => {
  let component: EditPickUpGameDataPageComponent;
  let fixture: ComponentFixture<EditPickUpGameDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPickUpGameDataPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPickUpGameDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
