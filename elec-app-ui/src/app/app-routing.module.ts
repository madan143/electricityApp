import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ComplaintComponent } from './components/complaint/complaint.component';
import { InquiryComponent } from './components/inquiry/inquiry.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'complaint', component: ComplaintComponent},
  { path: 'inquiry', component: InquiryComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'payment', component: PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
