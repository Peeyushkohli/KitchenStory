import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignupUser } from '../models/signup-user.model';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserServices {
  private hostUrl = environment.apiUrl;

  constructor(private _http: HttpClient) {}

  public createUser(
    username: string,
    emailId: string,
    password: string,
    mobileNumber: string
  ): SignupUser {
    let user = new SignupUser();
    user.username = username;
    user.emailId = emailId;
    user.password = password;
    user.mobileNumber = mobileNumber;
    user.role = 'role_user';
    return user;
  }

  public addUserToLocalCache(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUserFromLocalCache(): User[] {
    if (localStorage.getItem('users')) {
      return JSON.parse(localStorage.getItem('user'));
    }
    return null;
  }


  public addUser(data:any ){
    return this._http.post<any>("http://localhost:8083/api/sign-in",data).pipe(map((res:any)=>{
      return res;
}))
  
}

}