import { Component } from '@angular/core';
import { Teacher } from '../../../model/teacher';
import { TeacherService } from '../../../core/services/teacher.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-teacher',
  imports: [FormsModule],
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.css'
})
export class AddTeacherComponent {


    teacher:Teacher= {
      username: '',
      school: 0,
      phone: '',
      password: '',
      is_teacher: true
    };
    constructor(public service : TeacherService) { }

    ngOnInit(): void{
    }

    add(){
      console.log(this.teacher)
      this.service.addteacher(this.teacher)
      .subscribe(
        res=>{
          console.log(res);
        },
        err=>{
          console.log(err);
        }
      )
    }


}
