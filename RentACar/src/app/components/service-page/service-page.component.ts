import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import { GlobalService } from '../../service/global.service';
import { VehicleService } from '../../service/vehicle.service';
import { Car } from '../../model/car';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';


@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {
  serviceName:string;
  cars: Car[];
  username:string;
  approved:string;
  constructor(private route: ActivatedRoute,private globalService:GlobalService,private vehicleService:VehicleService,private userService:UserService) { }

  ngOnInit() {
    this.serviceName=this.globalService.getService();
    this.cars=[];
    this.getServiceCars();
    if(localStorage.role!=null){
      this.username=localStorage.username;
      this.getUser();
    }
    
    
  }

  getUser(){
    this.userService.getOneUser(this.username).subscribe(result=>{
      this.approved=result as string;


    })
  }
  getServiceCars(){
    this.vehicleService.getServiceVehicles(this.serviceName).subscribe(result => {
      this.cars = result as Car[];
      
    });
  }

  canReserve(){
    if(localStorage.role!=null && this.approved=='true'){
      return true;
    }
    return false;
  }

  reserveCar(){

  }

}
