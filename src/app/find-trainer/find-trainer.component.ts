import { Component } from '@angular/core';
import { trainer } from '../data-type';
import { UserService } from '../services/user.service';
import { TrainerService } from '../services/trainer.service';

@Component({
  selector: 'app-find-trainer',
  templateUrl: './find-trainer.component.html',
  styleUrls: ['./find-trainer.component.css']
})
export class FindTrainerComponent {
  trainerList:undefined | trainer[];
  trainerItem:undefined | trainer;
  trainerbooked:any=null;
  trainerbookedName:any='';
  showChildComponent:boolean=false;
constructor(private trainer:TrainerService){}
  Selection(data:object):void{
    console.warn(data)
    this.trainer.Selectiontrainer(data).subscribe((res =>{
        if(res){
            this.trainerList=res;
        }
    }))
  }
 
  getId(id:number){
      console.warn(id);
      this.trainerList?.filter((res) =>{
        if(res.id===id){
          this.trainerItem=res;
          this.showChildComponent=true;
        }
      })
      console.warn(this.trainerItem);
  }

  bookAppoitment(trainer:trainer){
   this.trainerbooked = trainer;
   this.trainerbookedName = trainer.name;
  }
  back(){
    this.showChildComponent=false;
    
    
  }
}
