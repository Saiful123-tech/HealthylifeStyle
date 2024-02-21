import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  addProduct(data:product){
   return this.http.post('https://localhost:7003/api/Admin/AddProduct',data)
  }
  
  getProducts(){
    return this.http.get<product[]>('https://localhost:7003/api/Admin/GetProducts');
  }

  searchProducts(value:string){
    return this.http.get<product[]>(`https://localhost:7003/api/Admin/searchProducts/${value}`);
  }
  redirectToDetails(id:number){
    return this.http.get<product[]>(`https://localhost:7003/api/Admin/GetProductById/${id}`)
  }

  orderByPrice(order:string){
    return this.http.get<product[]>(`https://localhost:7003/api/Admin/OrderByPrice/${order}`);
  }
}
