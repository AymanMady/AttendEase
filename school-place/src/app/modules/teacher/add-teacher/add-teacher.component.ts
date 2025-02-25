import { Component } from '@angular/core';
import { User } from '../../../model/user';
import {  UserService } from '../../../core/services/user.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ClasseService } from '../../../core/services/classe.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-teacher',
  imports: [FormsModule,ReactiveFormsModule,RouterModule,CommonModule],
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.css'
})
export class AddTeacherComponent {

  teacherForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private classeService: ClasseService,private teacherService: UserService) {
    this.teacherForm = this.fb.group({
      name : ['', Validators.required],
      password : ['', Validators.required],
      phone : ['', Validators.required],
      school : [1, Validators.required],
      is_teacher : [true, Validators.required],
    });
  }

  ngOnInit(): void{
  }



  onSubmit() {
    if (this.teacherForm.valid) {
      const teacher = this.teacherForm.value;
      this.teacherService.adduser(teacher).subscribe({
        next: (response) => {
          console.log('Enseignant ajoutée avec succès', response);
          this.router.navigate(['/teachers']);
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout de l enseignant', error);
        },
      });
    }
  }



}
