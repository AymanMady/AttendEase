import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Classroom } from '../../model/classroom';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  apiUrl= 'http://93.127.213.87:8000/classrooms';
  constructor(private http:HttpClient, private authService: AuthService) {}

  GetAll(){
    const headers = this.authService.getAuthorizationHeaders();
    return this.http.get<Classroom[]>(this.apiUrl, {
        headers: headers || {}
      }
    );
  }

  Get(empId:number){
    const headers = this.authService.getAuthorizationHeaders();
    return this.http.get<Classroom>(`${this.apiUrl}/${empId}`
      , {
        headers: headers || {}
      }
    );
  }

}
