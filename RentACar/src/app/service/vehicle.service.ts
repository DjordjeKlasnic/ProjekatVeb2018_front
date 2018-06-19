import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  getAllVehicles(){
    return this.http.get('/api/Vehicle');
  }

  addCar(car: Car){
    
    return this.http.post( '/api/Vehicle', car);
  }
}
