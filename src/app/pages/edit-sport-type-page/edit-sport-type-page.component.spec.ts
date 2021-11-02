import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSportTypePageComponent } from './edit-sport-type-page.component';

describe('EditSportTypePageComponent', () => {
  let component: EditSportTypePageComponent;
  let fixture: ComponentFixture<EditSportTypePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSportTypePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSportTypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
