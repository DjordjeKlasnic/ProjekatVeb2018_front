import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/users/login/login.component';
import { UserService } from './service/user.service';
import { VehicleService } from './service/vehicle.service';
import { AppRoutingModule } from './app-routing-module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AccountComponent } from './components/users/account/account.component';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RegisterService } from './service/register.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, VehicleService,RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
