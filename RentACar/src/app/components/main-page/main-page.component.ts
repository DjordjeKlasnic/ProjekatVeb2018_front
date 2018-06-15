import { Component, OnInit } from '@angular/core';
import {Service} from '../../model/service';
import {ServiceService} from '../../service/service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  services: Service[];
  service: Service;
  constructor(private serviceService: ServiceService, private router: Router) { }

  ngOnInit() {
    this.services = [];
    this.getAllServices();
    this.service = new Service();
  }
  
  isNotLogg(){
    if(localStorage.role!=null){
      return false;
    }
    return true;
  }
  
  getAllServices() {
    this.serviceService.getAllServices().subscribe(result => {
      this.services = result as Service[];
      console.log(result);
    });
  }
  
  isManager(){
    if(localStorage.role=="Manager"){
      return true;
    }
    return false;
  }


  sendLogut(){
    localStorage.clear();
  }
}
