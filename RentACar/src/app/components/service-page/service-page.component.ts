import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import { GlobalService } from '../../service/global.service';
import { VehicleService } from '../../service/vehicle.service';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {
  serviceName:string;

  constructor(private route: ActivatedRoute,private globalService:GlobalService,vehicleService:VehicleService) { }

  ngOnInit() {
    this.serviceName=this.globalService.getService();
  }

}
