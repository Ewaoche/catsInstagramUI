import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = environment.authsUrl + "login";
  private registerUrl = environment.authsUrl + "register";

  constructor(private httpclient:HttpClient) { }

  loginUser(data:any):Observable<any>{
     return this.httpclient.post(this.loginUrl, data);
  }

  registerUser(data:any):Observable<any>{
    return this.httpclient.post(this.registerUrl, data);
  }

  saveToken(token:any){
    localStorage.setItem('token', (token));

  }
  getToken(){
    return localStorage.getItem("token");
  }

  isAuthenticated(){
    if(this.getToken()){
        return true;
    }else{
      return false;
    }
  
  }

}
