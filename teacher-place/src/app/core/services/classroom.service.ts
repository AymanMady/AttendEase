import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Classroom } from '../../model/classroom';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  apiUrl= 'http://localhost:8000/classrooms';
  constructor(private http:HttpClient) {

  }

  GetAll(){
    return this.http.get<Classroom[]>(this.apiUrl);
  }

  Get(empId:number){
    return this.http.get<Classroom>(`${this.apiUrl}/${empId}`);
  }

}
