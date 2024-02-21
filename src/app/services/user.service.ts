import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { product, user } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  showMessage:string=""
  changeNav:boolean=false;
  constructor(private http:HttpClient,private Route:Router) { }
  signUp(data:user){
   console.warn(data)
   return this.http.post('https://localhost:7003/api/User/Create',data);
  //  subscribe((res) =>{
  //    console.log(res.body)  
  //    if(res.body){
  //    localStorage.setItem('user',JSON.stringify(res.body));
  //    this.Route.navigate(['findtrainer']);
  //    }
  //  })
  }
  login(data:user){
    console.warn(data);
    return this.http.get(`https://localhost:7003/api/User/LoginUser?userName=${data.userName}&password=${data.password}`);
    // .subscribe((result) =>{
    //   // if(result && result.body){
    //   //   console.warn(result.body)
    //   //   localStorage.setItem('user',JSON.stringify(result.body));
    //   //   this.changeNav = true;
    //   //   this.Route.navigate(['findtrainer']);
    //   // }
    //   // else{
    //   //     this.showMessage = "Login Failed"
    //   // }
    // })
  }

  BookSlot(data:user,slot:number,trainerName:string){
   return this.http.post(`https://localhost:7003/api/User/BookSlot?slot=${slot}&trainerName=${trainerName}`,data);
  }

  AddOrRemoveCart(data:product,userId:number,operation:string){
    return this.http.put<any>(`https://localhost:7003/api/User/AddRemoveCart/${userId}?operation=${operation === 'Add To Cart' ? 'AddCart' : 'RemoveCart'}`,data);
  }

  handleQuantity(data:product | undefined,userId:number,oper:string){
    return this.http.put<any>(`https://localhost:7003/api/User/QuantityAddRemove/${userId}?oper=${oper}`,data);
  }

}
