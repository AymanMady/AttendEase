import { Component } from '@angular/core';
import { ClasseService } from '../../../core/services/classe.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Class } from '../../../model/class';

@Component({
  selector: 'app-all-classes',
  imports: [FormsModule,ReactiveFormsModule,RouterModule,CommonModule],
  templateUrl: './all-classes.component.html',
  styleUrl: './all-classes.component.css'
})
export class AllClassesComponent {


    classes:any[] = []

    constructor(private service:ClasseService,private router: Router) {}

  ngOnInit(): void{
    this.getclasses()
  }

  getclasses(): void {
    this.service.getAllClasses().subscribe(
      (data: Class[]) => {
        this.classes = data;
        console.log(this.classes)
      },
      (error: any) => {
        console.error('Error fetching classes', error);
      }
    );
  }
    onDeleteclasse(id: any){
      this.service.deleteClass(id).subscribe(
        res=>{
          console.log(res);
          this.ngOnInit();
        },
        err=>{
          console.log(err)
        }
      );
    }



    onEditclasse(id: string): void {
      this.router.navigate(['/classes/', id]);
    }

}
