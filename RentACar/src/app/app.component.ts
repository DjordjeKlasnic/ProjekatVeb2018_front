import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  isNotLogg(){
    if(localStorage.role!=null){
      return false;
    }
    return true;
  }
  isManager(){
    if(localStorage.role=="Manager"){
      return true;
    }
    return false;
  }
  isAdmin(){
    if(localStorage.role=="Admin"){
      return true;
    }
    return false;
  }

  sendLogut(){
    localStorage.clear();
  }
}

