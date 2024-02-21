import { Component } from '@angular/core';
import { product, user } from '../data-type';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent {
  searchResult:any= null;
  products:undefined | product[];
  user:undefined | user;
  cart:any;
  showButtonName:string='';
  constructor(private product:ProductService,private userService:UserService){}
  ngOnInit():void{
    this.product.getProducts().subscribe(res =>{
      if(res){
        this.products = res;
        // this.cart = JSON.parse(res.addCart)
        console.log(this.products)
      }
    });
    let userData = localStorage.getItem('user');
    this.user = userData && JSON.parse(userData);
    let cartData = userData && JSON.parse(userData);
    this.cart = JSON.parse(cartData.addCart);
    // this.cart = JSON.parse();
  }

  addremoveCart(data:product,buttonName:string){
    if(this.user)
    this.userService.AddOrRemoveCart(data,this.user.id,buttonName).subscribe((res:any) =>{
      if(res){
        localStorage.removeItem('user');
        localStorage.setItem('user',JSON.stringify(res))
        this.user = res;
        this.setLocalStorage();
        console.log(this.user)
      }
      else{
        console.log(res.response);
      }
    });
    
  }

  showButton(id:any){
    if(this.cart){
     let productExit = this.cart.cartList.filter((item:any) => item.product.ProductId === id);
     if(productExit && productExit.length>0){
      this.showButtonName = 'Remove To Cart';
      return this.showButtonName;
     }
    }
     this.showButtonName = 'Add To Cart';
     return  this.showButtonName; 
  }

  searchProduct(query:KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      this.product.searchProducts(element.value).subscribe((data) =>{
        if(data){
        this.searchResult = data;
      }
      });
    }
  }
  hideSearch(){
    this.searchResult = undefined
  }
  redirectToDetails(id:number){
      this.product.redirectToDetails(id).subscribe((data) =>{
        if(data){
          this.products = data;
          localStorage.removeItem('user');
          localStorage.setItem('user',JSON.stringify(data))
         this.setLocalStorage();
        }
      })
  }  

  submitSearch(val:string){
     this.product.searchProducts(val).subscribe((data) =>{
       if(data){
        this.products = data;
        localStorage.removeItem('user');
        localStorage.setItem('user',JSON.stringify(data))
       this.setLocalStorage();
       }
     })
   }
   
   setLocalStorage(){
    let userData = localStorage.getItem('user');
    this.user = userData && JSON.parse(userData);
    let cartData = userData && JSON.parse(userData);
    this.cart = JSON.parse(cartData.addCart);
   }

   priceOrder(order:string){
       this.product.orderByPrice(order).subscribe((data:any) =>{
        if(data){
          this.products = data;
        localStorage.removeItem('user');
        localStorage.setItem('user',JSON.stringify(data))
       this.setLocalStorage();
        }
       })
   }
}

