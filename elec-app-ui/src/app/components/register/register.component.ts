import { Component, OnInit } from '@angular/core';
import { User } from "src/app/model/user.model";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model = new User();

  constructor() { }

  ngOnInit(): void {

  }

  createNewUser(registerationForm: NgForm){
    console.log(registerationForm);
    console.log(this.model);
  }

}
