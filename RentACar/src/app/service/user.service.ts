import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  naziv: number;
  constructor(private http: HttpClient) { }

  getAllUsers(){
      return this.http.get('/api/AppUser');
  }
}
