import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  naziv: number;
  constructor(private http: HttpClient) { }

  getAllUsers(){
      return this.http.get('/api/AppUser');
  }
  
  getOneUser(username:string){
    return this.http.get( '/api/AppUser/GetLogUser/'+username );

  }
  getByUsername(username:string){
    return this.http.get( '/api/AppUser/GetByUsername/'+username );
  }

  approve(user:User){

    return this.http.put( '/api/AppUser', user);

  }

  update(user:User){
    return this.http.put( '/api/AppUser/ChangeUser',user );
  }

   changePassword(object:any){
    return this.http.post( '/api/Account/ChangePassword', object );
  }
}
