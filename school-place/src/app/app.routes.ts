import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AuthComponent } from './modules/auth/auth.component';
import { AllStudentsComponent } from './modules/student/all-students/all-students.component';
import { AddStudentComponent } from './modules/student/add-student/add-student.component';
import { AllTeachersComponent } from './modules/teacher/all-teachers/all-teachers.component';
import { AddTeacherComponent } from './modules/teacher/add-teacher/add-teacher.component';
import { AllClassesComponent } from './modules/classe/all-classes/all-classes.component';
import { AddClasseComponent } from './modules/classe/add-classe/add-classe.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'students', component: AllStudentsComponent },
  { path: 'students/add', component: AddStudentComponent },
  { path: 'teachers', component: AllTeachersComponent },
  { path: 'teachers/add', component: AddTeacherComponent },
  { path: 'classrooms', component: AllClassesComponent },
  { path: 'classrooms/add', component: AddClasseComponent },

];
