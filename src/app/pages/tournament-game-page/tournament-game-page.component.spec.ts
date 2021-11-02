import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentGamePageComponent } from './tournament-game-page.component';

describe('TournamentGamePageComponent', () => {
  let component: TournamentGamePageComponent;
  let fixture: ComponentFixture<TournamentGamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentGamePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentGamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
