import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SubjectService } from '../../../core/services/subject.service';

@Component({
  selector: 'app-add-subject',
  imports: [FormsModule,ReactiveFormsModule,RouterModule,CommonModule],
  templateUrl: './add-subject.component.html',
  styleUrl: './add-subject.component.css'
})
export class AddSubjectComponent {


  subjectForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder,private subjectService: SubjectService) {
    this.subjectForm = this.fb.group({
      name : ['', Validators.required],
      school : [1, Validators.required],
    });
  }



  onSubmit() {
    if (this.subjectForm.valid) {
      const subject = this.subjectForm.value;
      this.subjectService.addSubject(subject).subscribe({
        next: (response) => {
          console.log('subject ajoutée avec succès', response);
          this.router.navigate(['/subjects']);
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout de  subject', error);
        },
      });
    }
  }

}
