import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { BankComponent } from './bank/bank.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CarsComponent } from './cars/cars.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { GpayComponent } from './gpay/gpay.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { MailsComponent } from './mails/mails.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipesComponent } from './pipes/pipes.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { StarComponent } from './star/star.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[], children:[
    {path:'calculator', component: CalculatorComponent},
    {path:'interpolation', component: InterpolationComponent},
    {path:'event-binding', component: EventBindingComponent},
    {path:'two-way-binding', component: TwowaybindingComponent},
    {path:'rectangle', component: RectangleComponent},
    {path:'event-registration', component: EventRegistrationComponent},
    {path:'employee-registration', component: EmployeeRegistrationComponent, canDeactivate:[NotifyGuard]},
    {path:'pipes',component:PipesComponent},
    {path:'cars',component:CarsComponent},
    {path:'star', component: StarComponent},
    {path:'gpay', component: GpayComponent},
    {path:'bank', component: BankComponent},
    {path:'mails', component: MailsComponent},
    {path:'bank-details/:id', component: BankDetailsComponent},
    {path:'create-account', component: CreateAccountComponent, canDeactivate:[NotifyGuard]}
  ]},
  {path:'',component:LoginComponent},
  {path:'**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


