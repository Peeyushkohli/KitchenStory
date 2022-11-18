import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';
import { Kproduct } from 'src/models/product.model';
import { Product } from 'src/products';
import { ProductServices } from 'src/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  kproduct: Kproduct=new Kproduct

  submitted:boolean=false;
  formValue! :FormGroup;

  constructor(private builder:FormBuilder,private service:ProductServices) { }

  ngOnInit(): void {
  
    this.formValue = this.builder.group({

      productname :[' ',Validators.required],
      category:[' ',Validators.required],
      availablequantity:[],
      price:[],
      imageUrl:['']

    })
  }
      get form() {
        return this.formValue.controls;
      }
        onSubmit()
        {
          this.submitted=true
          if(this.formValue.invalid)
          return
          else {
            this.service.addProduct(this.kproduct).subscribe(x=>console.log(x));
            window.alert("Product added sucessfully")
          }

        }

        addKProduct(){
          this.kproduct.productname=this.formValue.value.productname
          this.kproduct.category=this.formValue.value.category
          this.kproduct.availablequantity=this.formValue.value.availablequantity
          this.kproduct.price=this.formValue.value.price
          this.kproduct.imageUrl=this.formValue.value.imageUrl

          this.service.addProduct(this.kproduct).subscribe(res=>{console.log(res);
          alert("Product Added "),
          err=>{
            alert("Some thing went wrong!")
          }
          })
        }
      }

