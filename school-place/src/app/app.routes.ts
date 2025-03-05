import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AuthComponent } from './modules/auth/auth.component';
import { AllStudentsComponent } from './modules/student/all-students/all-students.component';
import { AddStudentComponent } from './modules/student/add-student/add-student.component';
import { AllTeachersComponent } from './modules/teacher/all-teachers/all-teachers.component';
import { AddTeacherComponent } from './modules/teacher/add-teacher/add-teacher.component';
import { AllClassesComponent } from './modules/classe/all-classes/all-classes.component';
import { AddClasseComponent } from './modules/classe/add-classe/add-classe.component';
import { EditStudentComponent } from './modules/student/edit-student/edit-student.component';
import { EditTeacherComponent } from './modules/teacher/edit-teacher/edit-teacher.component';
import { EditClasseComponent } from './modules/classe/edit-classe/edit-classe.component';
import { ClassesComponent } from './modules/attendace/classes/classes.component';
import { AttendancesComponent } from './modules/attendace/attendances/attendances.component';
import { AllSubjectsComponent } from './modules/subject/all-subjects/all-subjects.component';
import { AddSubjectComponent } from './modules/subject/add-subject/add-subject.component';
import { EditSubjectComponent } from './modules/subject/edit-subject/edit-subject.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'students', component: AllStudentsComponent },
  { path: 'students/add', component: AddStudentComponent },
  { path: 'students/:id', component: EditStudentComponent },
  { path: 'teachers', component: AllTeachersComponent },
  { path: 'teachers/add', component: AddTeacherComponent },
  { path: 'teachers/:id', component: EditTeacherComponent },
  { path: 'classes', component: AllClassesComponent },
  { path: 'classes/add', component: AddClasseComponent },
  { path: 'classes/:id', component: EditClasseComponent },
  { path: 'attendances/classes', component: ClassesComponent },
  { path: 'attendances/classes/:id', component: AttendancesComponent },
  { path: 'subjects', component: AllSubjectsComponent },
  { path: 'subjects/add', component: AddSubjectComponent },
  { path: 'subjects/:id', component: EditSubjectComponent },
];
