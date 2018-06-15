import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/users/login/login.component';
import {UserService} from './service/user.service';
import {VehicleService} from './service/vehicle.service';
import {BranchServiceService} from './service/branch-service.service';

import {AppRoutingModule} from './app-routing-module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AccountComponent} from './components/users/account/account.component';
import {FormsModule} from '@angular/forms';
import {MainPageComponent} from './components/main-page/main-page.component';
import {RegisterService} from './service/register.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from './interceptors/interceptor';
import {AddServiceComponent} from './components/services/add-service/add-service.component';
import {AddBranchOfficeComponent} from './components/branch-office/add-branch-office/add-branch-office.component';
import {MessageService} from './service/message-service.service';
import {ServiceService} from './service/service.service';
import {CanActivateViaAuthGuard} from './guard/auth.guard';
import { GlobalService } from './service/global.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    MainPageComponent,
    AddServiceComponent,
    AddBranchOfficeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService,GlobalService, VehicleService,BranchServiceService, RegisterService, MessageService, VehicleService, ServiceService,CanActivateViaAuthGuard,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule {
}
