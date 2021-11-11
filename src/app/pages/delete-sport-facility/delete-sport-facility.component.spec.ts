import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSportFacilityComponent } from './delete-sport-facility.component';

describe('DeleteSportFacilityComponent', () => {
  let component: DeleteSportFacilityComponent;
  let fixture: ComponentFixture<DeleteSportFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSportFacilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSportFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
