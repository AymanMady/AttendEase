import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceGridComponent } from './attendance-grid.component';

describe('AttendanceGridComponent', () => {
  let component: AttendanceGridComponent;
  let fixture: ComponentFixture<AttendanceGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendanceGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
