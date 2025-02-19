import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';
import { Teacher } from '../../model/teacher';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {


  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  getAllteachers() {
    const headers = this.authService.getAuthorizationHeaders();
    return this.http.get<any[]>(this.baseUrl + '/teachers/', {
      headers: headers || {}
    });
  }

  getteacher(Id: number) {
    const headers = this.authService.getAuthorizationHeaders();
    return this.http.get<Teacher>(`${this.baseUrl}/teachers/${Id}`, {
      headers: headers || {}
    });
  }


  addteacher(teacher: any): Observable<any> {
    return this.http.post(this.baseUrl+"/teachers/", teacher
      ,{
        headers: this.authService.getAuthorizationHeaders()
      }
    );
  }

  updateteacher(id:any, teacher: any){
    return this.http.put(this.baseUrl+"/teachers/"+id,teacher
      ,{
        headers: this.authService.getAuthorizationHeaders()
      }
    )
  }

  deleteteacher(id: any){
    return this.http.delete(this.baseUrl+"/teachers/"+id
      ,{
        headers: this.authService.getAuthorizationHeaders()
      }
    )
  }
  
}
