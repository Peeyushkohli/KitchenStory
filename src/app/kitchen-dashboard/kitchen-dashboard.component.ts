import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators, SelectControlValueAccessor} from '@angular/forms';
import { Kproduct } from 'src/models/product.model';
import { ProductServices } from 'src/services/product.service';



@Component({
  selector: 'app-kitchen-dashboard',
  templateUrl: './kitchen-dashboard.component.html',
  styleUrls: ['./kitchen-dashboard.component.css']
})



  
export class KitchenDashboardComponent implements OnInit {
  kproduct :Kproduct = new Kproduct;
  allKdata : Kproduct[];
  submitted:boolean=false;
  formValue ! : FormGroup;

formModal: any;
data: any;
id: number;
showAdd !:boolean;
showBtn !:boolean;

  constructor(private builder:FormBuilder,private service:ProductServices) { }

  ngOnInit(): void {

    this.formValue = this.builder.group({

      productname :[' '],
      category:[' ',Validators.required],
      availablequantity:[],
      price:[],
      imageUrl:['']})

      this.getKProducts()

    }

    clickAddKProduct(){
      this.formValue.reset();
      this.showAdd=true;
      this.showBtn=false;

    }

    addKProduct(){
      this.kproduct.productname=this.formValue.value.productname
      this.kproduct.category=this.formValue.value.category
      this.kproduct.availablequantity=this.formValue.value.availablequantity
      this.kproduct.price=this.formValue.value.price
      this.kproduct.imageUrl=this.formValue.value.imageUrl

      this.service.addProduct(this.kproduct).subscribe(res=>{console.log(res);
      alert("Product Added "); 
      this.formValue.reset();
      this.getKProducts();
      },
      err=>{
        alert("Some thing went wrong!")
      }
      
      )
  
}

getKProducts(){
  this.service.getProductsForUser().subscribe(res=>{
    this.allKdata=res;})
}

delKproduct(id:number){
  this.service.deleteProduct(id).subscribe(res=> {console.log(res);
    alert("Data Deleted");
    
    this.getKProducts();

  })
}

onEditKProduct(data:any){
  this.showAdd=false;
      this.showBtn=true;
  this.kproduct.id=data.id;
   this.formValue.controls['productname'].setValue(data.productname);
   this.formValue.controls['category'].setValue(data.category);
   this.formValue.controls['availablequantity'].setValue(data.availablequantity);
   this.formValue.controls['price'].setValue(data.price);
   this.formValue.controls['imageUrl'].setValue(data.imageUrl);
  
}

updateKProduct(){


this.kproduct.productname=this.formValue.value.productname
this.kproduct.category=this.formValue.value.category
this.kproduct.availablequantity=this.formValue.value.availablequantity
this.kproduct.price=this.formValue.value.price
this.kproduct.imageUrl=this.formValue.value.imageUrl
  this.service.updateProduct(this.kproduct,this.kproduct.id).subscribe(res=>{console.log(res);
    alert("Product Updated Successfully");

    let ref =document.getElementById('clear');
    ref ?.click();
    this.formValue.reset();
    this.getKProducts();
  })

}
}

