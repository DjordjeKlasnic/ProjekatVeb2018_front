import { Component, OnInit } from '@angular/core';
import {UserLogin} from '../../../model/userLogin';
import { RegisterService } from '../../../service/register.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin:UserLogin;
  constructor(private registerService: RegisterService,private router: Router) { }

  ngOnInit() {
    this.userLogin=new UserLogin();
    this.userLogin.grant_type="password";
  }

  sendLogin(){
    this.registerService.loginUser(this.userLogin)
    this.router.navigate(['/main-page']);

  }

  }

