import { Injectable } from '@angular/core';
import { Service } from '../model/service';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  serviceName:string
  carRet:string;
  constructor() { }

  getService(){
    return this.serviceName;
  }
  
  setService(serviceName1:string){
    this.serviceName=serviceName1;
  }

  setCarName(carName:string){
    this.carRet=carName;
    console.log(this.carRet);
  }

  getCar(){
    return this.carRet;
  }

}
