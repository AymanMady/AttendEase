import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { Student } from '../../../model/student';
import { StudentService } from '../../../core/services/student.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-students',
  imports: [RouterLink,CommonModule,RouterModule],
  templateUrl: './all-students.component.html',
  styleUrl: './all-students.component.css'
})
export class AllStudentsComponent {

  students:any[] = []

  constructor(private service:StudentService,private router: Router) {}

  ngOnInit(): void{
    this.getstudents()
  }

  getstudents(): void {
    this.service.getAllStudents().subscribe(
      (data: Student[]) => {
        this.students = data;
        console.log(this.students)
      },
      (error: any) => {
        console.error('Error fetching students', error);
      }
    );
  }

  onDeleteStudent(id: any){
    this.service.deleteStudent(id).subscribe(
      res=>{
        console.log(res);
        this.ngOnInit();
      },
      err=>{
        console.log(err)
      }
    );
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


  onEditStudent(id: string): void {
    this.router.navigate(['/students/', id]);
  }

}
