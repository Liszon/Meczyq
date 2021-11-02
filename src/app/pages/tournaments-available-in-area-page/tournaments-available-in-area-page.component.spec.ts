import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsAvailableInAreaPageComponent } from './tournaments-available-in-area-page.component';

describe('TournamentsAvailableInAreaPageComponent', () => {
  let component: TournamentsAvailableInAreaPageComponent;
  let fixture: ComponentFixture<TournamentsAvailableInAreaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentsAvailableInAreaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsAvailableInAreaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
