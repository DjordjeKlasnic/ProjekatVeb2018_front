import {Component, OnInit} from '@angular/core';
import {User} from '../../../model/user';
import {RegisterService} from '../../../service/register.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user: User;

  constructor(private registerService: RegisterService,private router: Router) {
  }

  ngOnInit() {
    this.user = new User();
  }

  addUser() {
    console.log(this.user);
    this.registerService.registerUser(this.user).subscribe(data => {
    this.router.navigate(['/login']);

    });

  }

}
