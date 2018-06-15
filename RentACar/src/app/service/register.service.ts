import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';
import {UserLogin} from '../model/userLogin';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {
  }

  registerUser(user: User) {
    return this.http.post('/api/Account/Register', user);
  }

  loginUser(userLogin: UserLogin) {
    //return this.http.post('/api/oauth/token',userLogin);

    let headers = new HttpHeaders();
    headers = headers.append('Content-type', 'application/x-www-form-urlencoded');

    if (!localStorage.jwt) {
      let x = this.http.post('http://localhost:51680/oauth/token', `username=${userLogin.username}&password=${userLogin.password}&grant_type=password`, {'headers': headers}) as Observable<any>;

      x.subscribe(
        res => {
          console.log(res.access_token);

          let jwt = res.access_token;

          let jwtData = jwt.split('.')[1];
          let decodedJwtJsonData = window.atob(jwtData);
          let decodedJwtData = JSON.parse(decodedJwtJsonData);

          let role = decodedJwtData.role;

          console.log('jwtData: ' + jwtData);
          console.log('decodedJwtJsonData: ' + decodedJwtJsonData);
          console.log('decodedJwtData: ' + decodedJwtData);
          console.log('Role ' + role);

          localStorage.setItem('jwt', jwt);
          localStorage.setItem('role', role);
          let d=JSON.parse(decodedJwtJsonData);
          localStorage.setItem('username',d.nameid);
        },
        err => {
          console.log('Error occured');
        }
      );
    }
  }
}
