import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/users/account/account.component';
import { MainPageComponent } from './components/main-page/main-page.component';



const appRoutes: Routes = [
  {path: '', redirectTo: '/main-page', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'main-page', component: MainPageComponent},

  {path: 'register', component: AccountComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}