import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/models/user.model';
import { UserServices } from 'src/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

user: User = new User

  submitted:boolean=false;
  formValue! :FormGroup;
  registerForm!:FormGroup
constructor(private builder:FormBuilder, private _http: HttpClient,private router:Router,private service:UserServices) { }


  
  
  ngOnInit(): void {

    this.registerForm= this.builder.group({

      emailId :[' '],
      mobileno:[' '],
      password:[' ']
      
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
        this.service.addUser(this.user).subscribe(x=>console.log(x));
        window.alert("User added sucessfully")
      }

    }

    addKUser(){
      this.user.emailId=this.formValue.value.emailId
      this.user.mobileno=this.formValue.value.mobileno
      this.user.password=this.formValue.value.password
      

      this.service.addUser(this.user).subscribe(res=>{console.log(res);
      alert("User Registered "),
      err=>{
        alert("Some thing went wrong!")
      }
      })
    }
  signUp(){

    this._http.post<any>("http://localhost:8083/api/sign-in",this.registerForm.value).subscribe(res=>{
      alert("User Registered !");
      this.registerForm.reset();
      this.router.navigate(['login'])
  },
  err=>{
    alert("Registration Failed!")
  })
    }
  }
  
  
  




 
  
  

