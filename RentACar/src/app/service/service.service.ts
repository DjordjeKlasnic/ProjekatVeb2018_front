import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Service} from '../model/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {
  }

  getAllServices() {
    return this.http.get('/api/Service');
  }

  addService(service: Service){
    let d=localStorage.username;
    service.UserName=d;
    return this.http.post( '/api/Service', service);
  }
}
