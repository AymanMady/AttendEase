import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attendance } from '../../model/attendance';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  apiUrl= 'http://localhost:8000/attendances';
  constructor(private http:HttpClient) {

  }

  GetAll(){
    return this.http.get<Attendance[]>(this.apiUrl);
  }

  Get(Id:number){
    return this.http.get<Attendance>(`${this.apiUrl}/${Id}`);
  }

  AddAll(data:any){
    return this.http.post(`${this.apiUrl}/bulk_create/`,data)
  }
}
