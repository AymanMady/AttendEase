import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Class } from '../../model/class';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  getAllClasses() {
    const headers = this.authService.getAuthorizationHeaders();
    return this.http.get<any[]>(this.baseUrl + '/classes/', {
      headers: headers || {}
    });
  }

  getClass(Id: number) {
    const headers = this.authService.getAuthorizationHeaders();
    return this.http.get<Class>(`${this.baseUrl}/classes/${Id}`, {
      headers: headers || {}
    });
  }


  addClass(classe: any): Observable<any> {
    return this.http.post(this.baseUrl+"/classes", classe
      ,{
        headers: this.authService.getAuthorizationHeaders()
      }
    );
  }

  updateClass(id:any, classe: Class){
    return this.http.put(this.baseUrl+"/classes/"+id,classe
      ,{
        headers: this.authService.getAuthorizationHeaders()
      }
    )
  }

  deleteClass(id: any){
    return this.http.delete(this.baseUrl+"/classes/"+id
      ,{
        headers: this.authService.getAuthorizationHeaders()
      }
    )
  }
}
