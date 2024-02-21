import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TrainerService } from '../services/trainer.service';
import { trainer } from '../data-type';

@Component({
  selector: 'app-update-auth',
  templateUrl: './update-auth.component.html',
  styleUrls: ['./update-auth.component.css']
})
export class UpdateAuthComponent {
  trainerData:undefined | trainer;
 constructor(private route:ActivatedRoute,private trainerService:TrainerService,private Route:Router) {}
//  let trainerId = this.route.snapshot.paramMap.get('id');
//  console.warn(productId)
showMessage:string=""
ngOnInit(): void{
 let  trainerId = this.route.snapshot.paramMap.get('id');
  console.warn(trainerId);
  trainerId && this.trainerService.UpdateData(trainerId).subscribe((res) =>{
    if(res){
      console.warn(res);
      this.trainerData=res;
      console.warn(this.trainerData.name);
    }
  })
}
UpdateData(data:trainer){
  console.warn(data);
  let  trainerId = this.route.snapshot.paramMap.get('id');
  data.id = this.trainerData ? this.trainerData.id : 0;
  this.trainerService.UpdateTrainer(data,trainerId).subscribe((res) =>{
      if(res){
        localStorage.removeItem('trainer')
        localStorage.setItem('trainer',JSON.stringify(res))
        console.warn(res)
        this.showMessage="Update data Successfully";
        setTimeout(() =>{
          this.showMessage="";
          this.Route.navigate(['trainer-dashboard']);
        },3000)
      }
      else{
        this.showMessage="Update data has not been Successfully";
        setTimeout(() =>{
          this.showMessage="";
        },3000)
      }
     
  })
}

}
