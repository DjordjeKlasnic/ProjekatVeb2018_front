import { Injectable } from '@angular/core';
import { Service } from '../model/service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  serviceName:string

  constructor() { }

  getService(){
    return this.serviceName;
  }
  
  setService(serviceName1:string){
    this.serviceName=serviceName1;
  }

}
