import { Component, OnInit } from '@angular/core';
import { Bill } from "src/app/model/bill.model";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  model = new Bill();
  constructor() { }

  ngOnInit(): void {
  }

  loadBillDetails(registerationForm: NgForm){
    console.log(registerationForm);
    console.log(this.model);
  }

}
