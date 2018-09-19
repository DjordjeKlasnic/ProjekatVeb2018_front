import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../service/global.service';
import {ActivatedRoute, Route} from '@angular/router';
import { CarServiceService } from '../../service/car-service.service';
import { Car } from '../../model/car';
import { VehicleService } from '../../service/vehicle.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  
  car:Car;
  serviceName:string;
  selectedDate: NgbDateStruct = undefined;

  constructor(private route: ActivatedRoute,private vehicleService:VehicleService,private globalService:GlobalService) { }

  ngOnInit() {
    this.car=new Car();
    this.serviceName=this.globalService.getService();
  }

  addCar(){
    this.car.ServiceName=this.serviceName;
    this.car.YearOfMaking = new Date(this.selectedDate['year'], this.selectedDate['month'], this.selectedDate['day']);

    this.vehicleService.addCar(this.car).subscribe(data => {

    });
  }

}
