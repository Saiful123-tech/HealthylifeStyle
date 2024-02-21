export interface trainer{
   user:string,
   name:string,
   num:number,
   email:string,
   psw:string,
   cat:string,
   adress:string,
   image:string,
   about:string,
   id:number
};

export interface user{
    id:number
    userName:string,
    name:string,
    email:string,
    password:string
}

export interface product{
    productId: undefined | number
    productName: string,
    productPrice: number,
    productDescription: string,
    productImage: string,
}

export interface priceSummary{
    price:number,
    discount:number,
    tax:number,
    delivery:number,
    total:number
}