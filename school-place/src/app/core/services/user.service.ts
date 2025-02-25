import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  getAllteachers() {
    const headers = this.authService.getAuthorizationHeaders();
    return this.http.get<any[]>(this.baseUrl + '/users/teachers/', {
      headers: headers || {}
    });
  }

  getAllusers() {
    const headers = this.authService.getAuthorizationHeaders();
    return this.http.get<any[]>(this.baseUrl + '/users/', {
      headers: headers || {}
    });
  }

  getuser(Id: string) {
    const headers = this.authService.getAuthorizationHeaders();
    return this.http.get<User>(`${this.baseUrl}/users/${Id}`, {
      headers: headers || {}
    });
  }

  adduser(user: any): Observable<any> {
    return this.http.post(this.baseUrl+"/users/", user
      ,{
        headers: this.authService.getAuthorizationHeaders()
      }
    );
  }

  updateuser(id:any, user: any){
    return this.http.put(this.baseUrl+"/users/"+id+"/",user
      ,{
        headers: this.authService.getAuthorizationHeaders()
      }
    )
  }

  deleteuser(id: any){
    return this.http.delete(this.baseUrl+"/users/"+id+"/"
      ,{
        headers: this.authService.getAuthorizationHeaders()
      }
    )
  }

  import(file: any): Observable<any> {
    return this.http.post(this.baseUrl+"/users/teachers/import/", file
      ,{
        headers: this.authService.getAuthorizationHeaders()
      }
    );
  }

}
