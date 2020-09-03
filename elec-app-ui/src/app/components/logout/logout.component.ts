import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  authStatus : string;
  subscription: Subscription;

  constructor(private loginService: LoginService,
    private router : Router) { }

  ngOnInit(): void {
    this.loginService.updateLogout();
    this.router.navigate(['/login']);
  }


}
