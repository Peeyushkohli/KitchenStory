import { Component, OnInit } from '@angular/core';

import { CartItem } from 'src/models/cart.model';
import { Kproduct } from 'src/models/product.model';
import { Order } from 'src/models/order.model';
import { UserOrder } from 'src/models/user-order.model';
import { ProductServices } from 'src/services/product.service';
import { OrderService } from 'src/services/order.service';
import { UserOrderServices } from 'src/services/user-order.service';
import { CartServices } from 'src/services/cart.service';
import { products } from 'src/products';

@Component({
  selector: 'app-user-home-products-card',
  templateUrl: './user-home-products-card.component.html',
  styleUrls: ['./user-home-products-card.component.css']
})
export class UserHomeProductsCardComponent implements OnInit {

  products: Kproduct[] = [];
  orderedProducts: Kproduct[] = [];
  cartItem: CartItem;
  cartItems: CartItem[] = [];
  order: Order;
  userOrder: UserOrder;
  shipping: number = 6;
  total: number = 0;
  sortDirection = 'asc';



  constructor(
    private productServices: ProductServices,
    private cartService: CartServices,
    private orderService: OrderService,
    private userOrderService: UserOrderServices
  ) {}
  
    ngOnInit(): void {

  

      this.productServices.getProductsForUser().subscribe((response) => {
      response.forEach((Kproduct) => this.products.push(Kproduct));
    });
    this.cartService.getCartItems().subscribe((response) => {
      response.forEach((cartItem) => this.cartItems.push(cartItem));
    });
    this.shipping = this.cartService.getShipping();{
  }
}

  onNavigateOrder(products: Kproduct) {
    console.log(products);
    this.orderedProducts.push(products);
    this.cartItem = this.cartService.createCartItem(products);
    this.userOrder = this.userOrderService.createUserOrderFromHome(
      this.cartItem
    );
    console.log(this.userOrder);
    this.cartItems = [];
    this.order = this.orderService.convertUserOrderToOrder(this.userOrder);
    console.log(this.order);
    this.orderService.addOrder(this.order).subscribe();
  }

  addToCart(product: Kproduct) {
    this.cartItem = this.cartService.createCartItem(product);
    let existingCartItem = this.cartItems.find(
      (cartItem) => cartItem.productName === this.cartItem.productName
    );

    if (existingCartItem) {
      this.cartItem = this.cartService.editCartItem(existingCartItem);
      this.cartService.updateCartItem(this.cartItem).subscribe();
    } else {
      this.cartService.addCartItem(this.cartItem).subscribe((response) => {
        this.cartItems.push(response);
      });
    }
  }

    }

  