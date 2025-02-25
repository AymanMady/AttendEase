import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { StudentService } from '../../../core/services/student.service';
import { Student } from '../../../model/student';
import { CommonModule } from '@angular/common';
import { ClasseService } from '../../../core/services/classe.service';
import { Class } from '../../../model/class';

@Component({
  selector: 'app-edit-student',
  imports: [FormsModule,ReactiveFormsModule,RouterModule,CommonModule],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent {
  classes:any[] = []
  editForm: FormGroup;
  selectedstudent: Student | null = null;

  constructor(
    private studentservice: StudentService,
    private classeService: ClasseService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.editForm = this.fb.group({
      id: [''],
      numero : [0, Validators.required],
      name_ar : ['', Validators.required],
      name_fr : ['', Validators.required],
      classe : [0, Validators.required],
      phone : ['', Validators.required],
      });
  }

  ngOnInit(): void {
    this.getclasses()
    const studentId = this.route.snapshot.paramMap.get('id');
    if (studentId) {
      this.loadstudentDetails(studentId);
    }
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

  loadstudentDetails(id: string) {
    this.studentservice.getStudent(id).subscribe((student: Student) => {
      this.selectedstudent = student;
      this.editForm.patchValue({
        id: student.id,
        numero : student.numero,
        name_ar : student.name_ar,
        name_fr : student.name_fr,
        classe : student.classe,
        phone : student.phone,
      });
    });
  }

  onSubmit() {
    if (this.editForm.valid) {
      const updatedstudent = this.editForm.value;
      this.studentservice.updateStudent(updatedstudent.id, updatedstudent).subscribe({
        next: (response) => {
          console.log('student mise à jour avec succès', response);
          this.router.navigate(['/students']);
        },
        error: (error) => {
          console.error('Erreur lors de la mise à jour de la student', error);
        },
      });
    }
  }
}
