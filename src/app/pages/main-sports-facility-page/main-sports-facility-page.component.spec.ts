import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSportsFacilityPageComponent } from './main-sports-facility-page.component';

describe('MainSportsFacilityPageComponent', () => {
  let component: MainSportsFacilityPageComponent;
  let fixture: ComponentFixture<MainSportsFacilityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSportsFacilityPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSportsFacilityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
