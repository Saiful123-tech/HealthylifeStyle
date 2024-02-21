import { Component } from '@angular/core';
import { user } from '../data-type';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent {
constructor(private adminService:AdminService,private Route:Router){}
  Login(data:user){
    this.adminService.Login(data).subscribe((res:any) =>{
      if(res){
        console.warn(res)
        localStorage.removeItem('admin');
        localStorage.setItem('admin',JSON.stringify(res));
        this.Route.navigate(['/']);
      }
   }) 
  }
}
