import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentDataPageComponent } from './tournament-data-page.component';

describe('TournamentDataPageComponent', () => {
  let component: TournamentDataPageComponent;
  let fixture: ComponentFixture<TournamentDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentDataPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
