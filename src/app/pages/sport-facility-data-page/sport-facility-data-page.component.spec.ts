import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportFacilityDataPageComponent } from './sport-facility-data-page.component';

describe('SportFacilityDataPageComponent', () => {
  let component: SportFacilityDataPageComponent;
  let fixture: ComponentFixture<SportFacilityDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportFacilityDataPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportFacilityDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
