import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSportFacilityDataPageComponent } from './edit-sport-facility-data-page.component';

describe('EditSportFacilityDataPageComponent', () => {
  let component: EditSportFacilityDataPageComponent;
  let fixture: ComponentFixture<EditSportFacilityDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSportFacilityDataPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSportFacilityDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
