import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickUpGameListComponent } from './pick-up-game-list.component';

describe('PickUpGameListComponent', () => {
  let component: PickUpGameListComponent;
  let fixture: ComponentFixture<PickUpGameListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickUpGameListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickUpGameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
