import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Kproduct } from 'src/models/product.model';
import { ProductServices } from 'src/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  kproduct !: Kproduct 
  allKdata : Kproduct[];


  constructor(private service :ProductServices,private route: ActivatedRoute,
    
    private cartService : CartService) { 
    

     }

  
  ngOnInit(): void {

    

    
  }

  addToCart() {
    this.cartService.addToCart(this.kproduct );
    window.alert('Your product has been added to the cart!');
  }


}

  


