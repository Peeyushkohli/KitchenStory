import { Injectable } from '@angular/core';
import { Kproduct } from 'src/models/product.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartDataList :any =[];

  productList=new BehaviorSubject<any>([]);
  public search =new BehaviorSubject<string>("");
  items: Kproduct[] = [];
  grandTotal:number;

  getProductData(){
    return this.productList.asObservable();
  }

  setProduct(product:any){

    this.cartDataList.push(...product);
    this.productList.next(product)
  }


  addToCart(product :any ) {
    this.cartDataList.push(product);
    this.productList.next(this.cartDataList)
    this.getTotalAmount();
    console.log(this.cartDataList);
    console.log(this.grandTotal);
  }

  getTotalAmount(){
    let grandTotal =0;
    this.cartDataList.map((a:any)=>{
      grandTotal+=a.total;
      
    })
  }

  getItems() {
    return this.items;
  }


  itemsCount(){
    return this.cartDataList.length;
  }

  removeCartData(product:any){
    this.cartDataList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartDataList.splice(index,1)
      }
    })
    this.productList.next(this.cartDataList);
  }
  clearCart() {
    this.cartDataList= [];
    this.productList.next(this.cartDataList);
  }



  constructor(private http :HttpClient) { }

  
      

      
    }
    
  

