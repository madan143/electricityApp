import { Component, OnInit } from '@angular/core';
import { BillDetails } from "src/app/model/bill.model";
import { NgForm } from '@angular/forms';
import { InquiryService } from 'src/app/services/inquiry/inquiry.service';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  model = new BillDetails();
  constructor(private inquiryService : InquiryService) { }

  ngOnInit(): void {
  }

  loadBillDetails(onlineBillForm: NgForm){
    this.model.statusCd = '';
    let uniqueSerNum = this.model.uniqueServNum;
    this.inquiryService.getBillDetails(this.model).subscribe(
      responseData => {
        if(responseData as any && (responseData as any).status){
          this.model.statusCd = (responseData as any).status;
        }else{
          if(responseData){
            console.log(responseData);
            this.model = responseData as BillDetails;
            console.log(this.model);
          }
        }
      },error => {
        this.model = new BillDetails();
        this.model.uniqueServNum = uniqueSerNum;
        this.model.statusCd = '404';
      });
  }

}
