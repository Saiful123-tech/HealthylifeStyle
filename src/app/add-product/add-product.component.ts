import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  addProductMessage: string | undefined;
  selectedFile:any;
  constructor(private product: ProductService){}
  // onFileSelected(event:any){
  //   this.selectedFile = event.target.files[0];
  //   console.log(this.selectedFile);
  // }
  submit(data: product) {
  
    // this.product.addProduct(data).subscribe((result) => {
    //   console.warn(result);
    //   if (result) {
    //     this.addProductMessage = "Product added Successfully"
    //   }
    //   setTimeout(() => this.addProductMessage = undefined, 3000)
    // });
   this.product.addProduct(data).subscribe((res)=>{
    if(res){
      this.addProductMessage = "Product added Successfully"
    }
    setTimeout(() => this.addProductMessage = undefined, 3000)
   })

  }
}
