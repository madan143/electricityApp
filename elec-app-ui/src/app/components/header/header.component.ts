import { Component  } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  authState: string = '';

  constructor(private loginService: LoginService) {
     this.authState = loginService.authStatus;
  }

}
