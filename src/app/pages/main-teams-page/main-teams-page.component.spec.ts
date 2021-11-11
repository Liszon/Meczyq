import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTeamsPageComponent } from './main-teams-page.component';

describe('MainTeamsPageComponent', () => {
  let component: MainTeamsPageComponent;
  let fixture: ComponentFixture<MainTeamsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTeamsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTeamsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
