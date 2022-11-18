import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule,Validator} from '@angular/forms';
import { AuthInterceptor } from './auth.interceptor';
import { AdminComponent } from './admin/admin.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { JwtHelperService } from "@auth0/angular-jwt";
import { UserHomeProductsCardComponent } from './home/user-home-products-card/user-home-products-card.component';
import { KitchenDashboardComponent } from './kitchen-dashboard/kitchen-dashboard.component';
import { FilterPipe } from './filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  

    HomeComponent,
    ProductsComponent,
    OrdersComponent,
    ShoppingCartComponent,
    UserComponent,
    LoginComponent,
    SignInComponent,
    ProductListComponent,
    ProductDetailsComponent,
    AdminComponent,
    AdminProductsComponent,
    AddProductComponent,
    UserHomeProductsCardComponent,
    KitchenDashboardComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
     ReactiveFormsModule,
     
    AppRoutingModule
  ],
  providers: [

    {provide :HTTP_INTERCEPTORS,useClass: AuthInterceptor,multi :true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
