import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoreModule} from './core/core.module';
import { ShareModule } from './share/share.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent} from './landingPage/landingPage.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LabPartnerComponent } from './supplierDialog/lab-partner.component';
import {RequestKitComponent} from './request-kit/request-kit.component';
import { FindSupplierComponent } from './find-supplier/find-supplier.component';
import { CanActivateGuard } from './core/guards/dashboard-route.guard';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    DashboardComponent,
    LabPartnerComponent,
    RequestKitComponent,
    FindSupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ShareModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [CanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
