import { Component, OnInit } from '@angular/core';
import { User } from "src/app/model/user.model";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

  model = new User();
  constructor() { }

  ngOnInit(): void {
  }

  submitNewComplaint(registerationForm: NgForm){
    console.log(registerationForm);
    console.log(this.model);
  }

}
