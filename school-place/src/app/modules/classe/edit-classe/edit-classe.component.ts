import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClasseService } from '../../../core/services/classe.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Class } from '../../../model/class';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-classe',
  imports: [FormsModule,ReactiveFormsModule,RouterModule,CommonModule],
  templateUrl: './edit-classe.component.html',
  styleUrl: './edit-classe.component.css'
})
export class EditClasseComponent {

    editForm: FormGroup;
    selectedclasse: Class | null = null;

    constructor(
      private classeservice: ClasseService,
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
      const classeId = this.route.snapshot.paramMap.get('id');
      if (classeId) {
        this.loadclasseDetails(classeId);
      }
    }



    loadclasseDetails(id: string) {
      this.classeservice.getClass(id).subscribe((classe: Class) => {
        this.selectedclasse = classe;
        this.editForm.patchValue({
          id: classe.id,
          name : classe.name,
          school : classe.school,
        });
      });
    }

    onSubmit() {
      if (this.editForm.valid) {
        const updatedclasse = this.editForm.value;
        this.classeservice.updateClass(updatedclasse.id, updatedclasse).subscribe({
          next: (response) => {
            console.log('classe mise à jour avec succès', response);
            this.router.navigate(['/classes']);
          },
          error: (error) => {
            console.error('Erreur lors de la mise à jour de la classe', error);
          },
        });
      }
    }
}
