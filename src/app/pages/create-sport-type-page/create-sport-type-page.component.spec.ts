import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSportTypePageComponent } from './create-sport-type-page.component';

describe('CreateSportTypePageComponent', () => {
  let component: CreateSportTypePageComponent;
  let fixture: ComponentFixture<CreateSportTypePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSportTypePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSportTypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
