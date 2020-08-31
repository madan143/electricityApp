import { Component, OnInit } from '@angular/core';
import { User } from "src/app/model/user.model";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new User();

  constructor() { }

  ngOnInit(): void {

  }

  validateUser(loginForm: NgForm){
    console.log(loginForm);
    console.log(this.model);
  }

}
