import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attendance } from '../../model/attendance';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private baseUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient, private authService: AuthService) {
  }

  GetAll(){
    const headers = this.authService.getAuthorizationHeaders();
    return this.http.get<Attendance[]>(this.baseUrl + '/attendances/'
      , {
        headers: headers || {}
      }
    );
  }

  Get(Id:number){
    const headers = this.authService.getAuthorizationHeaders();
    return this.http.get<Attendance>(`${this.baseUrl}/attendances/${Id}`
      , {
        headers: headers || {}
      }
    );
  }

  AddAll(data:any){
    const headers = this.authService.getAuthorizationHeaders();
    return this.http.post(`${this.baseUrl}/attendances/bulk_create/`,data
      , {
        headers: headers || {}
      }
    )
  }

  getAttendanceByClass(Id: number) {
    const headers = this.authService.getAuthorizationHeaders();
    return this.http.get<any[]>(`${this.baseUrl}/attendances/by_classe/${Id}`, {
      headers: headers || {}
    });
  }
}
