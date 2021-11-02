import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTournamentPageComponent } from './edit-tournament-page.component';

describe('EditTournamentPageComponent', () => {
  let component: EditTournamentPageComponent;
  let fixture: ComponentFixture<EditTournamentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTournamentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTournamentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
