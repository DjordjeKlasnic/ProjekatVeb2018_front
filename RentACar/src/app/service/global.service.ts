import { Injectable } from '@angular/core';
import { Service } from '../model/service';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  serviceName:string
  carRet:string;
  service:Service;

  constructor() { }

  getService(){
    return this.serviceName;
  }
  
  setService(serviceName1:string){
    this.serviceName=serviceName1;
  }

  getServiceObject(){
    return this.service;
  }

  setServiceObject(service:Service){
    this.service=service;
  }

  setCarName(carName:string){
    this.carRet=carName;
    console.log(this.carRet);
  }

  getCar(){
    return this.carRet;
  }

}
