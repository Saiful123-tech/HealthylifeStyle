import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { product, trainer } from '../data-type';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  isSellerLoggedIN = new BehaviorSubject<boolean>(false);
   isLoginError = new EventEmitter<boolean>(false)
  constructor(private http:HttpClient,private Route:Router) { }
  SignUp(data:trainer){
  return this.http.post('https://localhost:7003/api/trainer/Create',data);
  }

  Login(data:trainer){
    console.warn(`http://localhost:3000/trainer?user=${data.user}&psw=${data.psw}`)
    return this.http.get(`https://localhost:7003/api/trainer/LoginTrainer?userName=${data.user}&password=${data.psw}`);
    

    }
  
  Selectiontrainer(data:any){
   return this.http.get<trainer[]>(`https://localhost:7003/api/trainer/GetTrainerBycat/${data.cat}`);
  }
  UpdateData(id:any){
    console.warn(id);
    return this.http.get<trainer>(`https://localhost:7003/api/trainer/GetTrainer/${id}`);
  }
  UpdateTrainer(data:trainer,id:string | null){
    console.warn(id)
    return this.http.put<trainer>(`https://localhost:7003/api/trainer/Update/${id}`,data)
  }
  removeTrainer(id:string){
    return this.http.delete('https://localhost:7003/api/trainer/Delete/' + id);
  }

  GetTrainerBookedSlot(cat:string){
    return this.http.get<any>(`https://localhost:7003/api/User/GetBookedSlotByUser/${cat}`)
  }
   
   
}
