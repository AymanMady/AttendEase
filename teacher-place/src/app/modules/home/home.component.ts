import { Classe } from './../../model/classe';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ClasseService } from '../../core/services/classe.service';
import { SideBarComponent } from '../../shared/components/side-bar/side-bar.component';
import { MenuBarComponent } from '../../shared/components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,CommonModule,SideBarComponent,MenuBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  classes: Classe[] = [];

  constructor(private router: Router,private classeService:ClasseService) {}


  ngOnInit(): void {
    this.getclasses();
  }
  getclasses(){
    this.classeService.GetAll().subscribe( (data:any) => this.classes = data);
  }

  takeAttendace(id:number){
    this.router.navigate(['/attendances/' , id]);
  }
}
