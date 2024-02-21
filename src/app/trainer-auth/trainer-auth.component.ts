import { Component } from '@angular/core';
import { trainer } from '../data-type';
import { TrainerService } from '../services/trainer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer-auth',
  templateUrl: './trainer-auth.component.html',
  styleUrls: ['./trainer-auth.component.css']
})
export class TrainerAuthComponent {

  showLogin=true;
  showMessage:string="";
  authError:string="";
   constructor(private trainerservice:TrainerService,private Route:Router) {
    console.log("jdjdnds")
   }
   ngOnInit(): void{
    // console.log("jdjdnds")
    // this.showLogin=this.trainerservice.istrainerLoggedIn;
  }
  SignUp(data:trainer): void{
    console.warn(data);
    this.trainerservice.SignUp(data).subscribe((res:any) =>{
      if(res){
        localStorage.removeItem('trainer');
        localStorage.setItem('trainer',JSON.stringify(res));
        this.Route.navigate(['trainer-dashboard']);
        console.log(res);
      }
    })
    
  }

  Login(data:trainer){
    console.warn(data.psw)
    this.trainerservice.Login(data).subscribe((res:any) =>{
      if(res){
        console.log(res);
        localStorage.removeItem('trainer');
        localStorage.setItem('trainer',JSON.stringify(res))
        this.showMessage="Login Successfully";
        setTimeout(() =>{        
          this.showMessage="";
          this.Route.navigate(['trainer-dashboard']);
        },1000)         
      }
      else{
        console.warn("user londk")
        this.authError="User and Password has not be Correct";
        setTimeout(() =>{
          this.authError=""
        },1000)
      }
    });         
  }
  openLogin(){
    this.showLogin=true;
  }
  openSignUp(){
    this.showLogin=false;
  }
}
