import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AttendanceService } from '../../../core/services/attendance.service';
import { StudentService } from '../../../core/services/student.service';

@Component({
  selector: 'app-attendances',
  imports: [CommonModule,],
  templateUrl: './attendances.component.html',
  styleUrl: './attendances.component.css'
})
export class AttendancesComponent {


  attendances: any[] = [];
  id: any;

  constructor(
    private attendanceService:AttendanceService,
    private act:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllAttendances();
  }



  getAllAttendances() {
    this.id = this.act.snapshot.paramMap.get('id');

    this.attendanceService.getAttendanceByClass(this.id).subscribe((data:any) => this.attendances = data);
  }

}
