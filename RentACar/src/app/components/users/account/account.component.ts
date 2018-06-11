import { Component, OnInit } from '@angular/core';
import {User} from '../../../model/user';
import { RegisterService } from '../../../service/register.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user: User;

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
   this.user = new User();
  }

  addUser(){
    this.registerService.registerUser(this.user).subscribe(data=>{
    
  })

  }

}