import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportTypesListPageComponent } from './sport-types-list-page.component';

describe('SportTypesListPageComponent', () => {
  let component: SportTypesListPageComponent;
  let fixture: ComponentFixture<SportTypesListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportTypesListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportTypesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
