import { Component, OnInit } from '@angular/core';
import {User} from '../../../model/user';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit() {
   this.user = new User();
  }

  addUser(){
    console.log(this.user);
  }

}
