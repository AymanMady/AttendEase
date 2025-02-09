import { AttendancesComponent } from './modules/attendances/attendances.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AuthComponent } from './modules/auth/auth.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'attendances/:id',component: AttendancesComponent},
];
