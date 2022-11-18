
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/models/user.model';
import { UserServices } from 'src/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
    user :User ;
    loginForm!: FormGroup;

      
  
  
  

  constructor(private _http : HttpClient,private router: Router, private userService: UserServices,private builder:FormBuilder,private service: UserServices) { }

  ngOnInit(): void {
  
    this.loginForm =this.builder.group({
    emailId:[" "],
    password:[" "]

       
    })

  }

    loginIn() {
      this._http.get<any>("http://localhost:8083/api/list").subscribe(res=>{

      const user=res.find((a:any)=>{
        return a.emailId===this.loginForm.value.emailId && a.password===this.loginForm.value.password
      })
      if(user){
        alert("Login Successful !");
        this.loginForm.reset();
        this.router.navigate(['Kitchen'])
      }
      else {
        alert("User Not found!")}

      },err=> 
      {
        alert("Login failed")
      }
      )
    }
  }
  
      
    
  
      

    

  
  
  
  


