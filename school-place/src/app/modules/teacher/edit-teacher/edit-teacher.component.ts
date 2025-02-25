import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import { User } from './../../../model/user';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-teacher',
  imports: [FormsModule,ReactiveFormsModule,RouterModule,CommonModule],
  templateUrl: './edit-teacher.component.html',
  styleUrl: './edit-teacher.component.css'
})
export class EditTeacherComponent {


    editForm: FormGroup;
    selectedteacher: User | null = null;

    constructor(
      private teacherservice: UserService,
      private fb: FormBuilder,
      private router: Router,
      private route: ActivatedRoute
    ) {
      this.editForm = this.fb.group({
      name : ['', Validators.required],
      password : ['', Validators.required],
      phone : ['', Validators.required],
      school : [1, Validators.required],
      is_teacher : [true, Validators.required],
        });
    }

    ngOnInit(): void {
      const teacherId = this.route.snapshot.paramMap.get('id');
      if (teacherId) {
        this.loadteacherDetails(teacherId);
      }
    }


    loadteacherDetails(id: string) {
      this.teacherservice.getuser(id).subscribe((teacher: User) => {
        this.selectedteacher = teacher;
        this.editForm.patchValue({
          id: teacher.id,
          school : teacher.school,
          phone : teacher.phone,
          password : teacher.password,
          name : teacher.name,
        });
      });
    }

    onSubmit() {
      if (this.editForm.valid) {
        const updatedteacher = this.editForm.value;
        this.teacherservice.updateuser(updatedteacher.id, updatedteacher).subscribe({
          next: (response) => {
            console.log('teacher mise à jour avec succès', response);
            this.router.navigate(['/teachers']);
          },
          error: (error) => {
            console.error('Erreur lors de la mise à jour de la teacher', error);
          },
        });
      }
    }
}
