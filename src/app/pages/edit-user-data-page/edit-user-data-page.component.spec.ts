import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserDataPageComponent } from './edit-user-data-page.component';

describe('EditUserDataPageComponent', () => {
  let component: EditUserDataPageComponent;
  let fixture: ComponentFixture<EditUserDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserDataPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
