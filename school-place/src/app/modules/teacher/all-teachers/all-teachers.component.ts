import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../model/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-teachers',
  imports: [RouterLink,CommonModule],
  templateUrl: './all-teachers.component.html',
  styleUrl: './all-teachers.component.css'
})
export class AllTeachersComponent {



    teachers:any[] = []

    constructor(private service:UserService,private router: Router) {}

    ngOnInit(): void{
      this.getteachers()
    }

    getteachers(): void {
      this.service.getAllteachers().subscribe(
        (data: User[]) => {
          this.teachers = data;
          console.log(this.teachers)
        },
        (error: any) => {
          console.error('Error fetching teachers', error);
        }
      );
    }

    delete(id: any){
      this.service.deleteuser(id).subscribe(
        res=>{
          console.log(res);
          this.ngOnInit();
        },
        err=>{
          console.log(err)
        }
      );
    }

    onDeleteTeacher(id: any){
      this.service.deleteuser(id).subscribe(
        res=>{
          console.log(res);
          this.ngOnInit();
        },
        err=>{
          console.log(err)
        }
      );
    }

    onEditTeacher(id: string): void {
      this.router.navigate(['/teachers/', id]);
    }


  selectedFile!: File;
  message = '';


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (!this.selectedFile) {
      this.message = "Veuillez sélectionner un fichier.";
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);


    this.service.import(formData).subscribe({
      next: (response) => {
        this.message = response.message
        this.ngOnInit();
      },
      error: (error) => {
        this.message = error.error.error
      },
    });

  }

}
