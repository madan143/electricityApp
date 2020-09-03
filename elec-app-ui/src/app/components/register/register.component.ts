import { Component, OnInit } from '@angular/core';
import { User } from "src/app/model/user.model";
import { NgForm } from '@angular/forms';
import { RegisterService } from 'src/app/services/register/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model = new User();

  constructor(private registerService: RegisterService) {

  }

  ngOnInit() {
  }

  createNewUser(registerationForm: NgForm){
    console.log(registerationForm);
    console.log(this.model);
    this.registerService.createNewUser(this.model).subscribe(
      responseData => {
        console.log(responseData);
        if(responseData as any && (responseData as any).status){
          let statusCd = (responseData as any).status;
          if(statusCd=208){
              this.model.statusCd = statusCd;
          }
        }else{
          registerationForm.resetForm();
          this.model.statusCd = '200';
        }
      },error => {
        console.log(error);
        this.model.statusCd = (error as any).status;
      });
  }

}
