import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attendance } from '../../model/attendance';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  apiUrl= 'http://localhost:8000/attendances';
  constructor(private http:HttpClient, private authService: AuthService) {

  }

  GetAll(){
    const headers = this.authService.getAuthorizationHeaders();
    return this.http.get<Attendance[]>(this.apiUrl
      , {
        headers: headers || {}
      }
    );
  }

  Get(Id:number){
    const headers = this.authService.getAuthorizationHeaders();
    return this.http.get<Attendance>(`${this.apiUrl}/${Id}`
      , {
        headers: headers || {}
      }
    );
  }

  AddAll(data:any){
    const headers = this.authService.getAuthorizationHeaders();
    return this.http.post(`${this.apiUrl}/bulk_create/`,data
      , {
        headers: headers || {}
      }
    )
  }
}
