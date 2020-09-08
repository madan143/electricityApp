import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "src/app/model/user.model";
import { Observable, Subject } from 'rxjs';
import { AppConstants } from 'src/app/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authStatus: string;
  authVisibilityChange: Subject<string> = new Subject<string>();

  constructor(private http:HttpClient) {
    this.authVisibilityChange.subscribe((value) => {
      this.authStatus = value;
    });
  }

  validateLoginDetails(user : User){
    return this.http.post(AppConstants.LOGIN_API_URL,user);
  }

  updateLogin(message: string) {
      this.authVisibilityChange.next(message);
  }

  updateLogout() {
      this.authVisibilityChange.next();
  }

}
