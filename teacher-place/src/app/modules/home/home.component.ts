import { Classroom } from './../../model/classroom';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { ClassroomService } from '../../core/services/classroom.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  classrooms: Classroom[] = [];

  constructor(private classroomService:ClassroomService) {}


  ngOnInit(): void {
    this.getclasses();
  }
  getclasses(){

    this.classroomService.GetAll().subscribe(data => this.classrooms = data);
  }
}
