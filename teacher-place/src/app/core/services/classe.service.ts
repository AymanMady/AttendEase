import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Classe } from '../../model/classe';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  private baseUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient, private authService: AuthService) {}

  GetAll(){
    const headers = this.authService.getAuthorizationHeaders();
    return this.http.get<Classe[]>(this.baseUrl + '/classes/', {
        headers: headers || {}
      }
    );
  }

  Get(Id:number){
    const headers = this.authService.getAuthorizationHeaders();
    return this.http.get<Classe>(`${this.baseUrl}/classes/${Id}`
      , {
        headers: headers || {}
      }
    );
  }

}
