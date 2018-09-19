import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/users/login/login.component';
import {UserService} from './service/user.service';
import {VehicleService} from './service/vehicle.service';
import {BranchServiceService} from './service/branch-service.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
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
import { ServicePageComponent } from './components/service-page/service-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { CanActivateViaAuthGuardAdmin } from './guard/auth.guard2';
import { AddCarComponent } from './components/add-car/add-car.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CanActivateViaAuthGuardUser } from './guard/auth.guard3';
import { ReservationServiceService } from './service/reservation-service.service';
import { UpdateServiceComponent } from './components/services/update-service/update-service.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    MainPageComponent,
    AddServiceComponent,
    AddBranchOfficeComponent,
    ServicePageComponent,
    AdminPageComponent,
    AddCarComponent,
    ProfilePageComponent,
    ReservationComponent,
    UpdateServiceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,  
    NgbModule.forRoot() ,
    ToastrModule.forRoot({preventDuplicates:true})
  ],
  providers: [UserService,ReservationServiceService,GlobalService, VehicleService,BranchServiceService, RegisterService, MessageService, VehicleService,CanActivateViaAuthGuardUser, ServiceService,CanActivateViaAuthGuard,CanActivateViaAuthGuardAdmin,
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
