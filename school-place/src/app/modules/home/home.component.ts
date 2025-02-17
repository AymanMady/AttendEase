import { SidebarComponent } from './../../shared/components/sidebar/sidebar.component';
import { Classroom } from './../../model/classroom';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { ClassroomService } from '../../core/services/classroom.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
