import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../../model/student';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  getAllStudents() {
    const headers = this.authService.getAuthorizationHeaders();
    return this.http.get<any[]>(this.baseUrl + '/students/', {
      headers: headers || {}
    });
  }

  getStudent(Id: number) {
    const headers = this.authService.getAuthorizationHeaders();
    return this.http.get<Student>(`${this.baseUrl}/students/${Id}`, {
      headers: headers || {}
    });
  }

  getStudentByClass(Id: number) {
    const headers = this.authService.getAuthorizationHeaders();
    return this.http.get<any[]>(`${this.baseUrl}/students/by_classroom/${Id}`, {
      headers: headers || {}
    });
  }


  addStudent(student: any): Observable<any> {
    return this.http.post(this.baseUrl+"/students/", student
      ,{
        headers: this.authService.getAuthorizationHeaders()
      }
    );
  }

  updateStudent(id:any, student: any){
    return this.http.put(this.baseUrl+"/students/"+id,student
      ,{
        headers: this.authService.getAuthorizationHeaders()
      }
    )
  }

  deleteStudent(id: any){
    return this.http.delete(this.baseUrl+"/students/"+id
      ,{
        headers: this.authService.getAuthorizationHeaders()
      }
    )
  }

}
