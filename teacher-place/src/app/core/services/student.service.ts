import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../../model/student';
import { AuthService } from './auth.service';  // Assurez-vous d'importer AuthService

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  apiUrl = 'http://93.127.213.87:8000/students';

  constructor(private http: HttpClient, private authService: AuthService) {  // Injection de AuthService
  }

  GetAll() {
    const headers = this.authService.getAuthorizationHeaders();  // Utilisation de l'instance d'AuthService
    return this.http.get<any[]>(this.apiUrl, {
      headers: headers || {}  // Si les headers sont undefined, on passe un objet vide
    });
  }

  Get(Id: number) {
    const headers = this.authService.getAuthorizationHeaders();  // Utilisation des en-têtes
    return this.http.get<Student>(`${this.apiUrl}/${Id}`, {
      headers: headers || {}  // Ajouter les headers à la requête
    });
  }

  GetByClass(Id: number) {
    const headers = this.authService.getAuthorizationHeaders();  // Utilisation des en-têtes
    return this.http.get<any[]>(`${this.apiUrl}/by_classroom/${Id}`, {
      headers: headers || {}  // Ajouter les headers à la requête
    });
  }
}
