import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSportFacilityPageComponent } from './create-sport-facility-page.component';

describe('CreateSportFacilityPageComponent', () => {
  let component: CreateSportFacilityPageComponent;
  let fixture: ComponentFixture<CreateSportFacilityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSportFacilityPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSportFacilityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
