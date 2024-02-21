import { Component } from '@angular/core';
import { priceSummary, product } from '../data-type';
import { Route, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart:any;
  userId:number=0;
  productData:product ={
   productId: 0,
   productImage:"",
   productPrice:0,
   productDescription:'',
   productName:''
  }
  priceSummary:priceSummary={
    price:0,
    discount:0,
    tax:0,
    delivery:0,
    total:0
  }
 constructor(private userService:UserService){}
 ngOnInit():void{
  if(localStorage.getItem('user')){
      this.getSetlocalStorage();
       this.loadDetails();
      console.log(this.cart);
  }
 }

loadDetails(){
  let price=0;
  this.cart.cartList.forEach((item:any)=>{
    if(item.productCount){
    price=price+(+item.product.ProductPrice* + item.productCount)
    }
  });
 this.priceSummary.price = price;
 this.priceSummary.discount = price/10;
 this.priceSummary.tax=price/10;
 this.priceSummary.delivery = 100;
 this.priceSummary.total = price + (price/10) + 100 - (price/10);
 console.warn(this.priceSummary.total)
//  if(!this.cart.length){
//   this.router.navigate(['/'])
//  }
}
 handleQuantity(oper:string,product:any){ 
    this.productData!.productId = product && product.ProductId;
    this.productData!.productImage = product && product.ProductImage; 
    this.productData!.productName = product && product.ProductName; 
    this.productData!.productPrice = product && product.ProductPrice;
    this.productData!.productDescription = product && product.ProductDescription;
   this.userService.handleQuantity(this.productData,this.userId,oper).subscribe((res:any)=>{
    if(res){
  localStorage.removeItem('user');
  localStorage.setItem('user',JSON.stringify(res));
      this.getSetlocalStorage();
      this.loadDetails();
    }
   });
 }

 getSetlocalStorage(){ 
  let userData = localStorage.getItem('user');
  let cartData = userData && JSON.parse(userData);
  this.userId = cartData.id;
   this.cart = JSON.parse(cartData.addCart);
 }
 
 checkout(){

 }
}
