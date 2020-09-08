import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payment } from "src/app/model/payment.model";
import { AppConstants } from 'src/app/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }

  makePayment(payment : Payment){
    return this.http.post(AppConstants.PAYMENT_API_URL,payment);
  }

}
