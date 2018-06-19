import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './components/users/login/login.component';
import {AccountComponent} from './components/users/account/account.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {AddBranchOfficeComponent} from './components/branch-office/add-branch-office/add-branch-office.component';
import {AddServiceComponent} from './components/services/add-service/add-service.component';
import {CanActivateViaAuthGuard} from './guard/auth.guard';
import { ServicePageComponent } from './components/service-page/service-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { CanActivateViaAuthGuardAdmin } from './guard/auth.guard2';
import { AddCarComponent } from './components/add-car/add-car.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/main-page', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'main-page', component: MainPageComponent},
  {path: 'service-page', component: ServicePageComponent},
  {path: 'register', component: AccountComponent},
  {path: 'branch-offices', component: AddBranchOfficeComponent},
  {path: 'services', component: AddServiceComponent,canActivate: [CanActivateViaAuthGuard]},
  {path: 'admin-main', component: AdminPageComponent,canActivate:[CanActivateViaAuthGuardAdmin]},
  {path: 'add-car', component: AddCarComponent,canActivate:[CanActivateViaAuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
