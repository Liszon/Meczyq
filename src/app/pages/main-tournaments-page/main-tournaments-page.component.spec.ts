import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTournamentsPageComponent } from './main-tournaments-page.component';

describe('MainTournamentsPageComponent', () => {
  let component: MainTournamentsPageComponent;
  let fixture: ComponentFixture<MainTournamentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTournamentsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTournamentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
