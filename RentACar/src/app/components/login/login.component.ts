import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';
import { VehicleService } from '../../service/vehicle.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[];
  lastname: string;
  name: string;

  constructor(private userService: UserService, private vehicleService: VehicleService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    
    this.userService.getAllUsers().subscribe(data => {
      this.users = data as User[];
      
    })
  }

  getVehicles(){
    this.vehicleService.getAllVehicles().subscribe(data=>{
        console.log(data);
    })
  }

  submit(){
    console.log(this.name);
    console.log(this.lastname);
  }
  

}
