import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  addProduct(data:product){
   return this.http.post('https://healthylifestyleapi.azurewebsites.net/api/Admin/AddProduct',data)
  }
  
  getProducts(){
    return this.http.get<product[]>('https://healthylifestyleapi.azurewebsites.net/api/Admin/GetProducts');
  }

  searchProducts(value:string){
    return this.http.get<product[]>(`https://healthylifestyleapi.azurewebsites.net/api/Admin/searchProducts/${value}`);
  }
  redirectToDetails(id:number){
    return this.http.get<product[]>(`https://healthylifestyleapi.azurewebsites.net/api/Admin/GetProductById/${id}`)
  }

  orderByPrice(order:string){
    return this.http.get<product[]>(`https://healthylifestyleapi.azurewebsites.net/api/Admin/OrderByPrice/${order}`);
  }
}
