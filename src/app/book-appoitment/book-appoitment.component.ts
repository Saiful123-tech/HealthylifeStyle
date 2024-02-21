import { Component, Input } from '@angular/core';
import { trainer } from '../data-type';
import { UserService } from '../services/user.service';
import { TrainerService } from '../services/trainer.service';

@Component({
  selector: 'app-book-appoitment',
  templateUrl: './book-appoitment.component.html',
  styleUrls: ['./book-appoitment.component.css']
})
export class BookAppoitmentComponent{
@Input() trainer:any;
showMessage:string='';
showAlert:boolean=false;
timeSlot=["06:00-07:00","07:00-08:00","08:00-09:00","09:00-10:00","17:00-18:00",
"18:00-19:00","19:00-20:00","20:00-21:00","21:00-22:00","22:00-23:00"];
timeSlotByTrainer:any=[{}]
selectedTrainerSlot:any;
constructor(private user:UserService,private trainerService:TrainerService){}
ngOnInit():void {
  // ...
  
   this.getSlotBooked();
   // Now we have the item.
   
   // Use it...
}

getSlotBooked(){
  if(this.trainer){
    console.log(this.trainer.cat);
    this.trainerService.GetTrainerBookedSlot(this.trainer.cat).subscribe(res =>{
        if(res){
          this.selectedTrainerSlot = res.filter((x:any) => x.name == this.trainer.name);
          console.log(this.selectedTrainerSlot[0]);
          let index = 0;
          for (const key in this.selectedTrainerSlot[0])
          {
   if(key.includes('slot')){
    let slot = this.selectedTrainerSlot[0][key];
    if(slot){
    this.timeSlotByTrainer.push({key:this.timeSlot[index],'slotbooked':true});
    }
    else{
      this.timeSlotByTrainer.push({key:this.timeSlot[index],'slotbooked':false});
    }
    index++;
   }
}
// this.timeSlotByTrainer.splice(0,1);
console.log(this.timeSlotByTrainer);
        }
    });
  }

}
bookedSlot(slot:number){
let userStore =  localStorage.getItem('user');
let userData = userStore && JSON.parse(userStore);
console.log(userData.name,slot);
this.user.BookSlot(userData,slot,this.trainer.name).subscribe(res =>{
    if(res){
      console.log("Booked Slot")
      this.showMessage = "Booking Slot by User";
      this.showAlert =  true;
      this.timeSlotByTrainer = [];
      this.getSlotBooked();
    }
});
}

closeAlert(){
  this.showAlert = false;
}

// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })

}
