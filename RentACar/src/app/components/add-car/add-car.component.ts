import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../service/global.service';
import {ActivatedRoute, Route} from '@angular/router';
import { CarServiceService } from '../../service/car-service.service';
import { Car } from '../../model/car';
import { VehicleService } from '../../service/vehicle.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  
  car:Car;
  serviceName:string;

  constructor(private route: ActivatedRoute,private vehicleService:VehicleService,private globalService:GlobalService) { }

  ngOnInit() {
    this.car=new Car();
    this.serviceName=this.globalService.getService();
  }

  addCar(){
    this.car.ServiceName=this.serviceName;
    
    this.vehicleService.addCar(this.car).subscribe(data => {

    });
  }

}
