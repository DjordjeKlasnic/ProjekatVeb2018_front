import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Service } from '../../model/service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(private userSevice:UserService) { }
  user: User;
  selectedDate: NgbDateStruct;
  oldPassword: string;
  ngOnInit() {
    this.user = new User();
    if(localStorage.role!=null){
        this.userSevice.getByUsername(localStorage.username).subscribe(result=>{
          this.user=result as User;
          this.oldPassword = this.user.Password;
          console.log(this.user.DateBirth);
          // this.selectedDate['year'] = this.user.DateBirth.getFullYear();
          const date = new Date(this.user.DateBirth);
          this.selectedDate={ day: date.getDay(), month: date.getMonth(),
             year: date.getFullYear()};
        })
    }
  }


  updateUser(){
    const user = {'OldPassword' : this.oldPassword, 'NewPassword': this.user.Password, 'ConfirmPassword': this.user.ConfirmPassword}
    this.userSevice.update(this.user).subscribe(result=>{
        console.log("prosao");
        // this.userSevice.changePassword(user).subscribe(res=>{
        //   console.log("bravp");
        // });
    })
  }
}
