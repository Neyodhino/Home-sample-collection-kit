import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateGuard } from './core/guards/dashboard-route.guard';

import { LandingPageComponent } from './landingPage/landingPage.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LabPartnerComponent } from './supplierDialog/lab-partner.component';
import { RequestKitComponent } from './request-kit/request-kit.component';
import { FindSupplierComponent } from './find-supplier/find-supplier.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: LandingPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [CanActivateGuard]},
  {path: 'request', component: RequestKitComponent},
  {path: 'lab', component: LabPartnerComponent},
  {path: 'find-supplier', component: FindSupplierComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
