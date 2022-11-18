import { Kproduct } from '../models/product.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CustomHttpResponse } from '../models/http-response';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductServices {
  [x: string]: any;

  private test1Url:string ="http//localhost/8083/api/product/save"
  private testUrl :string = "http://localhost:8083/api/product/list"
  private hostUrl = environment.apiUrl;

  constructor(private _http: HttpClient) {}

  productForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    productname: new FormControl('', Validators.required),
    category :new FormControl(null,Validators.required),
    availablequantity: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.required),
    imageUrl: new FormControl('', Validators.required),
  });

  initializeFormGroup() {
    this.productForm.setValue({
      id: 0,
      productname: '',
      category : '',
      availablevquantity: null,
      price: null,
      imageUrl: '',
    });
  }

  populateEditProductForm(product: Kproduct) {
    this.productForm.setValue({
      id: product.id,
      productname: product.productname,
      category :product.category,
      availablevquantity: product.availablequantity,
      price: product.price,
      imageUrl: product.imageUrl,
    });
  }

  public getProductsForUser(){
    return  this._http.get<any>("http://localhost:8083/api/product/list").pipe(map((res : any)=>{
      return res;
    }))
  
  }

  public getProductsForAdmin(): Observable<Kproduct[]> {
    return this._http.get<Kproduct[]>(`${this.hostUrl}` + '/api/product/list');
  }

  public addProduct(data:any ){
    return this._http.post<any>("http://localhost:8083/api/product/save",data).pipe(map((res:any)=>{
      return res;
    }))
  }

  

  public updateProduct(data : any ,id: number) {
       return this._http.put<any>("http://localhost:8083/api/product/update"+"/"+id,data).pipe(map((res:any)=>
       {
       return res;
       }))

      
      }

  public deleteProduct(id:number) 
  {
     return this._http.delete<any>("http://localhost:8083/api/product/del"+"/"+id).pipe(map((res:any)=>{
    return res;
    
  }))
}
  getById(id:number):Observable<Kproduct> {
    return this._http.get<Kproduct>("http://localhost:8083/api/product/list"+"/"+id);

  }



  }


  


