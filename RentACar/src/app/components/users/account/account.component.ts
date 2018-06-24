import {Component, OnInit} from '@angular/core';
import {User} from '../../../model/user';
import {RegisterService} from '../../../service/register.service';
import {Router} from '@angular/router';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user: User;
  selectedDate: NgbDateStruct = undefined;
  today: any;
  constructor(private registerService: RegisterService,private router: Router,private toster:ToastrService) {
  }

  ngOnInit() {
    this.user = new User();
    this.user.Password = '';
    this.user.ConfirmPassword = '';
    this.today = new Date();
  }

  addUser() {
    console.log(this.user);
    this.user.DateBirth = new Date(this.selectedDate['year'], this.selectedDate['month'], this.selectedDate['day']);
    this.registerService.registerUser(this.user).subscribe(data => {
      this.toster.success("User succesfully registered");
      this.router.navigate(['/login']);

    },()=>{
      this.toster.error("Email already exists");
      return;
    }
  
  );

  }

}
