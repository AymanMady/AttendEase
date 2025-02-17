import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllClassroomsComponent } from './all-classrooms.component';

describe('AllClassroomsComponent', () => {
  let component: AllClassroomsComponent;
  let fixture: ComponentFixture<AllClassroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllClassroomsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllClassroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
