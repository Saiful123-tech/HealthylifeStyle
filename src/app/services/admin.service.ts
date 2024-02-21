import { Injectable } from '@angular/core';
import { user } from '../data-type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  Login(data:user){
    return this.http.get<any>(`https://healthylifestyleapi.azurewebsites.net/api/Admin/Login?adminName=${data.name}&adminPassword=${data.password}`)
  }
}
