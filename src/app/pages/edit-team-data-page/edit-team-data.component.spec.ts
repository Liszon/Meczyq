import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTeamDataComponent } from './edit-team-data.component';

describe('EditTeamDataComponent', () => {
  let component: EditTeamDataComponent;
  let fixture: ComponentFixture<EditTeamDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTeamDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTeamDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
