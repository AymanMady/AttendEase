import { Component } from '@angular/core';
import { StudentService } from '../../../core/services/student.service';
import { Student } from '../../../model/student';
import { ClasseService } from '../../../core/services/classe.service';
import { Class } from '../../../model/class';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-student',
  imports: [FormsModule,ReactiveFormsModule,RouterModule,CommonModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {

  classes:any[] = []

  studentForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private classeService: ClasseService,private studentService: StudentService) {
    this.studentForm = this.fb.group({
      numero : [0, Validators.required],
      name_ar : ['', Validators.required],
      name_fr : ['', Validators.required],
      classe : [0, Validators.required],
      phone : ['', Validators.required],
    });
  }

  ngOnInit(): void{
    this.getclasses()
  }

  getclasses(): void {
    this.classeService.getAllClasses().subscribe(
      (data: Class[]) => {
        this.classes = data;
        console.log(this.classes)
      },
      (error: any) => {
        console.error('Error fetching classes', error);
      }
    );
  }

  onSubmit() {
    if (this.studentForm.valid) {
      const student = this.studentForm.value;
      this.studentService.addStudent(student).subscribe({
        next: (response) => {
          console.log('Etudiant ajoutée avec succès', response);
          this.router.navigate(['/students']);
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout de l etudiant', error);
        },
      });
    }
  }




}
