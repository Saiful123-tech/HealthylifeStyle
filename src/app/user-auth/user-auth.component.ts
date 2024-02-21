import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { user } from '../data-type';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  showLogin:boolean=false;
  constructor(private userService:UserService,private Route:Router){}
  SignUp(data:user){
    console.warn(data)
    this.userService.signUp(data).subscribe((res) =>{
       if(res){
     localStorage.removeItem('user');
     localStorage.setItem('user',JSON.stringify(res));
     this.Route.navigate(['/']);
     }
    });
  }
  Login(data:user){
     this.userService.login(data).subscribe((res:any) =>{
        if(res){
          console.warn(res)
          localStorage.removeItem('user');
          localStorage.setItem('user',JSON.stringify(res));
          this.Route.navigate(['findtrainer']);
        }
     })
  }
  openLogin(){
    this.showLogin=true;
  }
  openSignUp(){
    this.showLogin=false;
  }
}
