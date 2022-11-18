import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

import { FormBuilder,FormGroup,FormControl } from '@angular/forms';
import { Kproduct } from 'src/models/product.model';
import { Router } from '@angular/router';
import { isNgContainer } from '@angular/compiler';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})


export class ShoppingCartComponent implements OnInit {
  allKdata : any;
  products :any =[];
  allProducts:number=0;
  gt:any=0;
constructor(private cartservice:CartService,private route:Router,private formBuilder:FormBuilder){}
  
  
    


  ngOnInit(): void {

    this.ViewCart();
    this.cartservice.getProductData().subscribe(res=>
      {
        this.products=res;
        this.gt=this.cartservice.getTotalAmount();
    })
  }

    emptyCart(item:any){
      this.cartservice.removeCartData(item);

      this.ViewCart();
    }

    emptyAllCart(){
      this.cartservice.clearCart();
      this.route.navigate(['cart'])
    }

    ViewCart(){


     


        this.cartservice.getProductData().subscribe(res=>{
          this.allKdata=res;})
      
        }

          inc(p){

            if(p.quantity !=5){
              p.quantity+=1;
            }
          }

          dec(p){

            if(p.quantity !=1){
              p.quantity-=1;
            }
          }

          


        g
            }
            
        
      
    
    



  


