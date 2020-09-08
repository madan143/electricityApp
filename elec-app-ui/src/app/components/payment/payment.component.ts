import { Component, OnInit } from '@angular/core';
import { Payment } from "src/app/model/payment.model";
import { StorageService } from 'src/app/services/storage/storage.service';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentAmt : string;
  uniqueServNum : string;
  model = new Payment();

  constructor(private storageService: StorageService,
    private paymentService: PaymentService,
    private router : Router) {
    this.paymentAmt = storageService.paymentAmt;
    this.uniqueServNum = storageService.uniqueServNum;
  }

  ngOnInit(): void {
  }

  makePayment(onlineBillForm: NgForm){
    this.model.uniqueServNum = this.uniqueServNum;
    this.model.paymentAmt = this.paymentAmt;
    this.paymentService.makePayment(this.model).subscribe(
      responseData => {
        this.storageService.updateStatusMsg("Payment processed Successfully");
        this.router.navigate(['/inquiry']);
      },error => {
        console.error(error);
        this.model.statusCd = '404';
      });
  }

}
