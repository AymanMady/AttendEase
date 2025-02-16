import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.apiBaseUrl; 


  constructor(
    private http: HttpClient
  ) { }

  login(loginRequest: any): Observable<any> {
    return this.http.post(this.baseUrl + "/token/", loginRequest);
  }

  public getAuthorizationHeaders(): HttpHeaders | undefined {
    const jwtToken = localStorage.getItem('JWT');
    if (jwtToken) {
      return new HttpHeaders().set('Authorization', 'Bearer ' + jwtToken);
    } else {
      console.log("JWT token not found in the Local Storage");
      return undefined;
    }
  }

  logout(token: any): Observable<any> {
    const headers = this.getAuthorizationHeaders();
    return this.http.post(this.baseUrl + "/logout/", token, { headers });
  }

}
