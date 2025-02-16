import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Classroom } from '../../model/classroom';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  private baseUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient, private authService: AuthService) {}

  GetAll(){
    const headers = this.authService.getAuthorizationHeaders();
    return this.http.get<Classroom[]>(this.baseUrl + '/classrooms/', {
        headers: headers || {}
      }
    );
  }

  Get(Id:number){
    const headers = this.authService.getAuthorizationHeaders();
    return this.http.get<Classroom>(`${this.baseUrl}/classrooms/${Id}`
      , {
        headers: headers || {}
      }
    );
  }

}
