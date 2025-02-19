import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TeacherService } from '../../../core/services/teacher.service';
import { Teacher } from '../../../model/teacher';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-teachers',
  imports: [RouterLink,CommonModule],
  templateUrl: './all-teachers.component.html',
  styleUrl: './all-teachers.component.css'
})
export class AllTeachersComponent {



    teachers:any[] = []

    constructor(private service:TeacherService) {}

    ngOnInit(): void{
      this.getteachers()
    }

    getteachers(): void {
      this.service.getAllteachers().subscribe(
        (data: Teacher[]) => {
          this.teachers = data;
          console.log(this.teachers)
        },
        (error: any) => {
          console.error('Error fetching teachers', error);
        }
      );
    }

    delete(id: any){
      this.service.deleteteacher(id).subscribe(
        res=>{
          console.log(res);
          this.ngOnInit();
        },
        err=>{
          console.log(err)
        }
      );
    }
}
