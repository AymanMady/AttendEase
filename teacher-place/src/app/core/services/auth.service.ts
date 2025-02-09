import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://localhost:8000/api';

  constructor(
    private http: HttpClient
  ) { }

  login(loginRequest: any): Observable<any> {
    return this.http.post(this.apiUrl + "/token/", loginRequest);
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

}
