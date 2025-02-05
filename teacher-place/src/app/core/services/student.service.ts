import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  apiUrl= 'http://localhost:8000/students';
  constructor(private http:HttpClient) {

  }

  GetAll(){
    return this.http.get<any[]>(this.apiUrl);
  }

  Get(Id:number){
    return this.http.get<Student>(`${this.apiUrl}/${Id}`);
  }

}
