import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SubjectService } from '../../../core/services/subject.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subject } from '../../../model/subject';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-subject',
  imports: [FormsModule,ReactiveFormsModule,RouterModule,CommonModule],
  templateUrl: './edit-subject.component.html',
  styleUrl: './edit-subject.component.css'
})
export class EditSubjectComponent {


      editForm: FormGroup;
      selectedsubject: Subject | null = null;

      constructor(
        private subjectservice: SubjectService,
        private fb: FormBuilder,
        private router: Router,
        private route: ActivatedRoute
      ) {
        this.editForm = this.fb.group({
          id: [''],
          name : ['', Validators.required],
          school : [1, Validators.required],
          });
      }

      ngOnInit(): void {
        const subjectId = this.route.snapshot.paramMap.get('id');
        if (subjectId) {
          this.loadsubjectDetails(subjectId);
        }
      }



      loadsubjectDetails(id: string) {
        this.subjectservice.getSubject(id).subscribe((subject: Subject) => {
          this.selectedsubject = subject;
          this.editForm.patchValue({
            id: subject.id,
            name : subject.name,
            school : subject.school,
          });
        });
      }

      onSubmit() {
        if (this.editForm.valid) {
          const updatedsubject = this.editForm.value;
          this.subjectservice.updateSubject(updatedsubject.id, updatedsubject).subscribe({
            next: (response) => {
              console.log('subject mise à jour avec succès', response);
              this.router.navigate(['/subjects']);
            },
            error: (error) => {
              console.error('Erreur lors de la mise à jour de la subject', error);
            },
          });
        }
      }
}
