import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillDetails } from "src/app/model/bill.model";
import { NgForm } from '@angular/forms';
import { InquiryService } from 'src/app/services/inquiry/inquiry.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  model = new BillDetails();
  statusMsg : string;

  constructor(private inquiryService : InquiryService,
    private storageService: StorageService,
    private router : Router) {
      this.statusMsg = storageService.statusMsg;
    }

  ngOnInit(): void {
  }

  loadBillDetails(onlineBillForm: NgForm){
    this.statusMsg = "";
    this.storageService.resetStatusMsg();
    this.model.statusCd = '';
    let uniqueSerNum = this.model.uniqueServNum;
    this.inquiryService.getBillDetails(uniqueSerNum).subscribe(
      responseData => {
        if(responseData as any && (responseData as any).status){
          this.model.statusCd = (responseData as any).status;
        }else{
          if(responseData){
            console.log(responseData);
            this.model = responseData as BillDetails;
            this.storageService.updatePaymentAmt(this.model.totalAmt);
            this.storageService.updateUniqueSerNum(this.model.uniqueServNum);
          }
        }
      },error => {
        this.model = new BillDetails();
        this.model.uniqueServNum = uniqueSerNum;
        this.model.statusCd = '404';
      });
  }

  navigateToPayment(){
    this.router.navigate(['/payment']);
  }

}
