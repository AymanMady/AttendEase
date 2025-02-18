import { Component } from '@angular/core';
import { StudentService } from '../../../core/services/student.service';
import { Student } from '../../../model/student';
import { ClasseService } from '../../../core/services/classe.service';
import { Class } from '../../../model/class';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {

  classes:any[] = []

  student:Student= {
    numero: 0,
    name_ar: '',
    name_fr: '',
    classe: 0,
    phone: ''
  };
  constructor(public service : StudentService,public classService : ClasseService) { }

  ngOnInit(): void{
    this.getclasses()
  }

  add(){
    console.log(this.student)
    this.service.addStudent(this.student)
    .subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    )
  }

  getclasses(): void {
    this.classService.getAllClasses().subscribe(
      (data: Class[]) => {
        this.classes = data;
        console.log(this.classes)
      },
      (error: any) => {
        console.error('Error fetching classes', error);
      }
    );
  }



}
