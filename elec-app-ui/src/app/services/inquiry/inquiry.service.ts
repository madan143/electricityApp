import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from 'src/app/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class InquiryService {

  constructor(private http:HttpClient) { }

  getBillDetails(uniqueSerNum : string){
    return this.http.post(AppConstants.INQUIRY_API_URL,uniqueSerNum);
  }
}
