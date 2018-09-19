import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import { GlobalService } from '../../service/global.service';
import { VehicleService } from '../../service/vehicle.service';
import { Car } from '../../model/car';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';
import {Router} from '@angular/router';
import { Service } from '../../model/service';
import { Broffice } from '../../model/broffice';
import { BranchServiceService } from '../../service/branch-service.service';


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
  service:Service;
  branchOffices: Broffice[];

  constructor(private route: ActivatedRoute,private router: Router,
  private globalService:GlobalService,private vehicleService:VehicleService,
  private userService:UserService, private bOfficeService: BranchServiceService) { }

  ngOnInit() {
    this.serviceName=this.globalService.getService();
    this.service=this.globalService.getServiceObject();
    this.cars=[];
    this.getServiceCars();
    this.getOffices();
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

  getOffices(){
    this.bOfficeService.getSomeBranch(this.serviceName).subscribe(result => {
      this.branchOffices = result as Broffice[];
      
    });
  }

  canReserve(){
    if(localStorage.role!=null && localStorage.role=='AppUser' && this.approved=='true'){
      return true;
    }
    return false;
  }


 canChangeOffice(){
    if(localStorage.role!=null && localStorage.role=='Manager'){
      return true;
    }
    return false;
  }

  reserveCar(car:Car){
    this.globalService.setCarName(car.Model);
    this.globalService.setService(this.serviceName);
    this.router.navigate(['/reservation']);

  }

}
