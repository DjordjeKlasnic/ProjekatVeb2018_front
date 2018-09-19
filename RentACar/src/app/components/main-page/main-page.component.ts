import { Component, OnInit } from '@angular/core';
import {Service} from '../../model/service';
import {ServiceService} from '../../service/service.service';
import {Router} from '@angular/router';
import { GlobalService } from '../../service/global.service';
import { Reservation } from '../../model/reservation';
import { ReservationServiceService } from '../../service/reservation-service.service';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  services: Service[];
  service: Service;
  reservation:Reservation;
constructor(private serviceService: ServiceService, private router: Router,private toster:ToastrService,private globalService: GlobalService,private resSer:ReservationServiceService) { }

  ngOnInit() {
    this.services = [];
    this.getAllServices();
    this.service = new Service();
  }
  
  isNotLogg(){
    if(localStorage.role!=null){
      return false;
    }
    return true;
  }
  
 /// showServices(){
 ///   if(localStorage.role==null){
 ///     return true;
///    }
 ///   return false;
 /// }

  isManager(){
    if(localStorage.role=="Manager"){
      return true;
    }
    return false;
  }

  getAllServices() {
    this.serviceService.getAllServices().subscribe(result => {
      this.services = result as Service[];
      console.log(result);
    });
  }
  
  openService(service:Service){
    
    this.globalService.setService(service.Name);
    this.globalService.setServiceObject(service);
    this.router.navigate(['/service-page']);
  }

 deleteService(service:Service){
    this.serviceService.deleteService(service).subscribe(result=>{
      console.log("usao u delete"+service);
      this.toster.success("Succesfully deleted");
      this.router.navigate(['/main-page']);
    },()=>{
      this.toster.error("Error while deleting");
      return;
    })
  }
 
updateService(service:Service){
  this.globalService.setServiceObject(service);
   this.router.navigate(['/update-service']);
}

}
