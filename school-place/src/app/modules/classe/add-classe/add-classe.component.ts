import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ClasseService } from '../../../core/services/classe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-classe',
  imports: [FormsModule,ReactiveFormsModule,RouterModule,CommonModule],
  templateUrl: './add-classe.component.html',
  styleUrl: './add-classe.component.css'
})
export class AddClasseComponent {

  classeForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder,private classeService: ClasseService) {
    this.classeForm = this.fb.group({
      name : ['', Validators.required],
      school : [1, Validators.required],
    });
  }



  onSubmit() {
    if (this.classeForm.valid) {
      const classe = this.classeForm.value;
      this.classeService.addClass(classe).subscribe({
        next: (response) => {
          console.log('classe ajoutée avec succès', response);
          this.router.navigate(['/classes']);
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout de  classe', error);
        },
      });
    }
  }

}
