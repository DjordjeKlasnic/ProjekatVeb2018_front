import { Component, OnInit } from '@angular/core';
import {Service} from '../../model/service';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  services: Service[];
  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.services = [];
    this.getAllServices();
  }

  getAllServices() {
    this.serviceService.getAllServices().subscribe(result => {
      this.services = result as Service[];
    });
  }

  approveService(service:Service){
    this.serviceService.approve(service).subscribe(data => {

    });
  }

}
