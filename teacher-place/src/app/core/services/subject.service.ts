import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Subject } from '../../model/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  getAllsubjects() {
    const headers = this.authService.getAuthorizationHeaders();
    return this.http.get<any[]>(this.baseUrl + '/subjects/', {
      headers: headers || {}
    });
  }

  getSubject(Id: string) {
    const headers = this.authService.getAuthorizationHeaders();
    return this.http.get<Subject>(`${this.baseUrl}/subjects/${Id}`, {
      headers: headers || {}
    });
  }


  addSubject(subject: any): Observable<any> {
    return this.http.post(this.baseUrl+"/subjects"+"/", subject
      ,{
        headers: this.authService.getAuthorizationHeaders()
      }
    );
  }

  updateSubject(id:any, subject: Subject){
    return this.http.put(this.baseUrl+"/subjects/"+id+"/",subject
      ,{
        headers: this.authService.getAuthorizationHeaders()
      }
    )
  }

  deleteSubject(id: any){
    return this.http.delete(this.baseUrl+"/subjects/"+id+"/"
      ,{
        headers: this.authService.getAuthorizationHeaders()
      }
    )
  }
}
