import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../../model/student';
import { AuthService } from './auth.service';  // Assurez-vous d'importer AuthService
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient, private authService: AuthService) {  
  }

  GetAll() {
    const headers = this.authService.getAuthorizationHeaders();
    return this.http.get<any[]>(this.baseUrl + '/students/', {
      headers: headers || {}
    });
  }

  Get(Id: number) {
    const headers = this.authService.getAuthorizationHeaders();
    return this.http.get<Student>(`${this.baseUrl}/students/${Id}`, {
      headers: headers || {}
    });
  }

  GetByClass(Id: number) {
    const headers = this.authService.getAuthorizationHeaders();
    return this.http.get<any[]>(`${this.baseUrl}/students/by_classroom/${Id}`, {
      headers: headers || {}
    });
  }
}
