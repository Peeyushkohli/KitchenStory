import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import {Product } from 'src/products';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totItemNumber:number=0;
  public searchTerm:string='';
  constructor(private cartService :CartService) {

   }

  ngOnInit(): void  {
   
   this.cartService.getProductData().subscribe(res=>
    {this.totItemNumber=res.length;

   })

  }
search(event:any){
  this.searchTerm=(event.target as HTMLInputElement).value;

  console.log(this.searchTerm);
  this.cartService.search.next(this.searchTerm);

}
}
