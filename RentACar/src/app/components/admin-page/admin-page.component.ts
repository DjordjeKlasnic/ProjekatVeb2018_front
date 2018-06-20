import { Component, OnInit } from '@angular/core';
import {Service} from '../../model/service';
import {ServiceService} from '../../service/service.service';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  services: Service[];
  users:User[];
  constructor(private serviceService: ServiceService,private userService:UserService) { }

  ngOnInit() {
    this.services = [];
    this.getAllServices();
    this.users=[];
    this.getAllUsers();
  }

  getAllServices() {
    this.serviceService.getAllServices().subscribe(result => {
      this.services = result as Service[];
    });
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(result=>{
      this.users=result as User[];
    });
  }
  approveService(service:Service){
    this.serviceService.approve(service).subscribe(data => {

    });
  }

  approveUser(user:User){
    this.userService.approve(user).subscribe(data=>{

    });
  }

}
