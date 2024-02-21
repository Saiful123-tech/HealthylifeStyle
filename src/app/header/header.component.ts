import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType='default';
  trainerName:string="";
  userName:string="";
  showName:boolean=false;
  constructor(private Route:Router) {}
  ngOnInit():void{
  this.Route.events.subscribe((val:any) =>{
    // console.warn(val);
    if(val.url){
      
      if(localStorage.getItem('trainer')){
        console.warn("klx,ldxl")
        this.showName=true;
        let trainerStore = localStorage.getItem('trainer');
        let trainerData = trainerStore && JSON.parse(trainerStore); 
        this.trainerName = trainerData.name;
          this.menuType='trainer'
      }
      else if(localStorage.getItem('user')){
        console.warn("User Part")
        this.showName=true;
        let userStore = localStorage.getItem('user');
        let userData = userStore && JSON.parse(userStore); 
        this.userName = userData.name;
          this.menuType='user'
      }
      else if(localStorage.getItem('admin')){
        console.warn("Admin Part");
        this.showName=true;
        let adminStore = localStorage.getItem('admin');
        let trainerData = adminStore && JSON.parse(adminStore); 
        this.trainerName = trainerData.name;
        this.menuType='admin' 
      }
    }
  })
  }
  reload(){
    
  }
  Logout(){
    this.showName=false;
    if(localStorage.getItem('trainer')){
    localStorage.removeItem('trainer')
    }
    else if(localStorage.getItem('user')){
      localStorage.removeItem('user')
    }
    console.warn("Logout")
    this.menuType='default'
    this.Route.navigate(['/']);
  }
}
