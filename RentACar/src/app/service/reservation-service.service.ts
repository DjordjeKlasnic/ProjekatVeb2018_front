import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation } from '../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationServiceService {

  constructor(private http: HttpClient) { }

  addReserve(reservation:Reservation){
    
    return this.http.post( '/api/Reservation', reservation);
  }
}
