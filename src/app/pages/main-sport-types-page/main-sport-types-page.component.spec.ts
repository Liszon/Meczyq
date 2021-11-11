import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSportTypesPageComponent } from './main-sport-types-page.component';

describe('MainSportTypesPageComponent', () => {
  let component: MainSportTypesPageComponent;
  let fixture: ComponentFixture<MainSportTypesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSportTypesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSportTypesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
