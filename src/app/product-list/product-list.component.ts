import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductServices } from 'src/services/product.service';
import { Kproduct} from 'src/models/product.model'
import { environment } from 'src/environments/environment';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
 import { Observable } from 'rxjs';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private hostUrl = environment.apiUrl;

  kproduct :Kproduct = new Kproduct;
  allKdata : Kproduct[];
  submitted:boolean=false;
  formValue ! : FormGroup;
    productList :any;
formModal: any;
data: any;
id: number;
searchKey :string="";

  constructor(private builder:FormBuilder,private service:ProductServices,private cartservice:CartService) { }

  ngOnInit(): void {

    this.formValue = this.builder.group({

      productname :[' '],
      category:[' ',Validators.required],
      availablequantity:[],
      price:[],
      imageUrl:['']})

      this.getKProducts()

    }

    
      

    getKProducts(){
      this.service.getProductsForUser().subscribe(res=>{
        this.productList=res;
        this.productList.forEach((a:any)=>{ 
          Object.assign(a,{quantity:1,total:a.price})
      });

    })

    this.cartservice.search.subscribe(val=>{

      this.searchKey=val;
    })
  
      }
  

  


   
      addToCart(item:any)
      {
        this.cartservice.addToCart(item);


      }
    }
    
  

  
  

