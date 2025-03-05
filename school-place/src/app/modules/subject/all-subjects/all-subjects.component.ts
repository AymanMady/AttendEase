import { Component } from '@angular/core';
import { SubjectService } from '../../../core/services/subject.service';
import { Router, RouterModule } from '@angular/router';
import { Subject } from '../../../model/subject';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-subjects',
  imports: [FormsModule,ReactiveFormsModule,RouterModule,CommonModule],
  templateUrl: './all-subjects.component.html',
  styleUrl: './all-subjects.component.css'
})
export class AllSubjectsComponent {

    subjects:any[] = []

    constructor(private service:SubjectService,private router: Router) {}

    ngOnInit(): void{
      this.getsubjects()
    }

    getsubjects(): void {
      this.service.getAllsubjects().subscribe(
        (data: Subject[]) => {
          this.subjects = data;
          console.log(this.subjects)
        },
        (error: any) => {
          console.error('Error fetching subjects', error);
        }
      );
    }
      onDeletesubject(id: any){
        this.service.deleteSubject(id).subscribe(
          res=>{
            console.log(res);
            this.ngOnInit();
          },
          err=>{
            console.log(err)
          }
        );
      }

      onEditsubject(id: string): void {
        this.router.navigate(['/subjects/', id]);
      }

}
