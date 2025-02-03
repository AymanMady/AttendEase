import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { HomeComponent } from './modules/home/home.component';
import { AttendancesComponent } from './modules/attendances/attendances.component';
import { AttendanceGridComponent } from './modules/attendance-grid/attendance-grid.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AuthComponent,HomeComponent,AttendancesComponent,AttendanceGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teacher-place';
}
