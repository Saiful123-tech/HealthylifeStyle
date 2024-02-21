import { Component,Input,InputDecorator, } from '@angular/core';
import { trainer } from '../data-type';
import { TrainerService } from '../services/trainer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer-dashboard',
  templateUrl: './trainer-dashboard.component.html',
  styleUrls: ['./trainer-dashboard.component.css']
})
export class TrainerDashboardComponent {
  trainerName:string="";
  trainerNumber:string="";
  trainerEmail:string="";
  trainerUser:string="";
  trainerCategory:string="";
  trainerAddress:string="";
  trainerAbout:string="";
  trainerImage:string="";
  trainerId:string="";
  showMessage:string=""
  @Input() model:undefined | trainer;
  constructor(private trainerService:TrainerService,private Route:Router){}
  ngOnInit():void{
    if(localStorage.getItem('trainer')){
      let trainerStore = localStorage.getItem('trainer');
      let trainerData = trainerStore && JSON.parse(trainerStore);
      this.trainerName=trainerData.name;
      this.trainerNumber=trainerData.num;
      this.trainerEmail=trainerData.email;
      this.trainerUser=trainerData.user;
      this.trainerCategory=trainerData.cat;
      this.trainerAddress=trainerData.adress;
      this.trainerAbout=trainerData.about;
      this.trainerImage=trainerData.Image;
      this.trainerId=trainerData.id;
      console.warn(trainerData.image)
    }
    else if(this.model){
      this.trainerName=this.model.name;
      this.trainerNumber=this.model.num.toString();
      this.trainerEmail=this.model.email;
      this.trainerUser=this.model.user;
      this.trainerCategory=this.model.cat;
      this.trainerAddress=this.model.adress;
      this.trainerAbout=this.model.about;
      this.trainerImage=this.model.image;
      console.warn(this.trainerCategory)
    }
    console.warn(this.trainerImage)
  }
  clickMethod(Id: string) {
    console.warn('njdjbd')
    if(confirm("Are you sure to delete ")) {
      this.trainerService.removeTrainer(Id).subscribe((res) =>{
         if(res){
         this.showMessage="Trainer Account has been Delted";
         localStorage.removeItem('trainer');
         setTimeout(() =>{
          this.showMessage="";
          this.Route.navigate(['trainer'])
         },2000)

         }
      })
    }
  }
  
  Logout(){
    localStorage.removeItem('trainer')
    console.warn("Logout")
  }
}
