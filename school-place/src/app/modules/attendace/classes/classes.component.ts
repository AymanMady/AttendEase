import { Component } from '@angular/core';
import { ClasseService } from '../../../core/services/classe.service';
import { Router } from '@angular/router';
import { Class } from '../../../model/class';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-classes',
  imports: [CommonModule],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.css'
})
export class ClassesComponent {
  classes: Class[] = [];

  constructor(private router: Router,private classeService:ClasseService) {}


  ngOnInit(): void {
    this.getclasses();
  }
  getclasses(){
    this.classeService.getAllClasses().subscribe( (data:any) => this.classes = data);
  }

  takeAttendace(id:number){
    this.router.navigate(['attendances/classes/' , id]);
  }
}
