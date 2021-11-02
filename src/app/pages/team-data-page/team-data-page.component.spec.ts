import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDataPageComponent } from './team-data-page.component';

describe('TeamDataPageComponent', () => {
  let component: TeamDataPageComponent;
  let fixture: ComponentFixture<TeamDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamDataPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
