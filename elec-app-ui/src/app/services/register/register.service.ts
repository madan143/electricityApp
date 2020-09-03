import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "src/app/model/user.model";
import { AppConstants } from 'src/app/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  createNewUser(user : User){
    return this.http.post(AppConstants.REGISTER_API_URL,user);
  }
}
