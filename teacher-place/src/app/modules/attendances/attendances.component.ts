import { AttendanceService } from './../../core/services/attendance.service';
import { Attendance } from './../../model/attendance';
import { Student } from './../../model/student';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { StudentService } from '../../core/services/student.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SideBarComponent } from '../../shared/components/side-bar/side-bar.component';
import { MenuBarComponent } from '../../shared/components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-attendances',
  imports: [HeaderComponent,CommonModule,FormsModule,SideBarComponent,MenuBarComponent],
  templateUrl: './attendances.component.html',
  styleUrl: './attendances.component.css'
})
export class AttendancesComponent {

  students: any[] = [];
  id: any;

  constructor(
    private StudentService:StudentService,
    private attendanceService:AttendanceService,
    private act:ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getAllStudents();

    console.log(this.id);
  }


  getAllStudents() {
    this.id = this.act.snapshot.paramMap.get('id');

    this.StudentService.GetByClass(this.id).subscribe(data => {
      this.students = data.map(student => ({
        ...student,
        isPresent: false
      }));
    });
  }

  saveAttendance() {
    const attendanceData = this.students.map(student => ({
      student: student.id,
      classe : this.id,
      date: new Date().toISOString().split('T')[0],
      justification: '',
      is_present: student.isPresent
    }));


    console.log(attendanceData)

    this.attendanceService.AddAll(attendanceData).subscribe(response => {
      alert('Présence sauvegardée avec succès!');
      this.router.navigate(['/home']);
    }, error => {
      alert('Erreur lors de la sauvegarde de la présence.');
    });
  }
}
