import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassroomComponent } from './add-classroom.component';

describe('AddClassroomComponent', () => {
  let component: AddClassroomComponent;
  let fixture: ComponentFixture<AddClassroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddClassroomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
