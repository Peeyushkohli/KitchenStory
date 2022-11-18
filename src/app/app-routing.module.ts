import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import  {SignInComponent} from 'src/app/sign-in/sign-in.component'
import { KitchenDashboardComponent } from './kitchen-dashboard/kitchen-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes =[
  {
    path : '' ,redirectTo :'login' ,pathMatch :'full'
  },
  
{
  path : 'login', component :LoginComponent
},

{
  path : 'sign-in',  component :SignInComponent
},
{
  path : 'Kitchen' , component : KitchenDashboardComponent

},
{
  path : 'Products',component : ProductListComponent},

  {
    path : 'Header' ,component : HeaderComponent
  },
  {
    path: 'product/:ProductId', component : ProductDetailsComponent
  
  },

  {path: 'cart' ,component :ShoppingCartComponent
},

{path : 'orders' ,component: OrdersComponent

}

  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
