import { SubjectService } from './../../core/services/subject.service';
import { AttendanceService } from './../../core/services/attendance.service';
import { Component } from '@angular/core';
import { StudentService } from '../../core/services/student.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuBarComponent } from '../../shared/components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-attendances',
  imports: [CommonModule,FormsModule,MenuBarComponent],
  templateUrl: './attendances.component.html',
  styleUrl: './attendances.component.css'
})
export class AttendancesComponent {

  students: any[] = [];
  id: any;
  subjects: any[] = [];

  selected_subject = '';
  selected_period = '';

  constructor(
    private StudentService:StudentService,
    private attendanceService:AttendanceService,
    private act:ActivatedRoute,
    private router: Router,
    private SubjectService:SubjectService
  ) {}

  ngOnInit(): void {
    this.getAllStudents();
    this.getsubjects();
  }

  getsubjects(){
    this.SubjectService.getAllsubjects().subscribe( (data:any) => this.subjects = data);
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
      is_present: student.isPresent,
      period: this.selected_period,
      subject: this.selected_subject
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
