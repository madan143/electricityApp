import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "src/app/model/user.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  apiURL = environment.apiurl;
  error = "";

  validateUserLogin(user : User){
    this.http.post<User>(this.apiURL,user).subscribe(
      responseData => {
        console.log(responseData);
      }, error => {
        this.error = error.message;
      }
    );
  }


}
