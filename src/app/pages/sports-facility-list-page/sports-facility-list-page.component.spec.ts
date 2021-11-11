import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsFacilityListPageComponent } from './sports-facility-list-page.component';

describe('SportsFacilityListPageComponent', () => {
  let component: SportsFacilityListPageComponent;
  let fixture: ComponentFixture<SportsFacilityListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsFacilityListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsFacilityListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
