import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private cartservice : CartService) { }
  cartLength:number=0;
  allKdata : any;
  products :any =[];
  allProducts:any;
  grandTot:number=0;
  checkoutForm=this.formBuilder.group({
    name:' ',
    address:' ',
    mobileno: ''
  });


  ngOnInit(): void {
  

    
    this.cartservice.getProductData().subscribe(res=>
      {
        this.products=res;
        this.cartLength=res.length;

        this.allProducts=this.cartservice.getTotalAmount();
    })
  }
  
  onSubmit(): void {
    // Process checkout data here
    //this.items = this.cartservice.clearCart();
    //console.warn('Your order has been submitted', this.checkoutForm.value);
    //this.checkoutForm.reset();
  }
  
  
    


}



