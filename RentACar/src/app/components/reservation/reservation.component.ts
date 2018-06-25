import { Component, OnInit } from '@angular/core';
import { Car } from '../../model/car';
import { GlobalService } from '../../service/global.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { Reservation } from '../../model/reservation';
import { ServiceService } from '../../service/service.service';
import { Broffice } from '../../model/broffice';
import { BranchServiceService } from '../../service/branch-service.service';
import { ReservationServiceService } from '../../service/reservation-service.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  selectedDate1: NgbDateStruct = undefined;
  selectedDate2: NgbDateStruct = undefined;

  today: any;
  carName:string;
  reservation:Reservation;
  listBranch:Broffice[];
  listBranch2:Broffice[];
  serviceName:string;
  option1: any;
  option2: any;

  constructor(private globalService:GlobalService,private router: Router,private toster:ToastrService,private branchService:BranchServiceService,private resSer:ReservationServiceService) { }

  ngOnInit() {
    this.listBranch=[];
    this.listBranch2=[];
    this.serviceName=this.globalService.getService();
    this.carName=this.globalService.getCar();
    this.today = new Date();
    this.reservation=new Reservation();
    this.getBranch();
  }



  onOptionsSelected1(event){
    this.reservation.StartBranch=event; 
   }

   onOptionsSelected2(event){
    this.reservation.EndBranch=event;
  }

  reserve(){

    this.reservation.StartDate = new Date(this.selectedDate1['year'], this.selectedDate1['month'], this.selectedDate1['day']);
    this.reservation.EndDate = new Date(this.selectedDate2['year'], this.selectedDate2['month'], this.selectedDate2['day']);
    this.reservation.ServiceName=this.serviceName;
    this.reservation.Username=localStorage.username;
    this.reservation.CarName=this.carName;
    console.log(this.reservation);
    this.resSer.addReserve(this.reservation).subscribe(result=>{
      this.toster.success("Succesfull reservation");
      this.router.navigate(['/service-page']);

    },()=>{
      this.toster.error("Reservation already exists or your dates are not correct");
      return;
    }
  );

  }

  getBranch(){
    this.branchService.getSomeBranch(this.serviceName).subscribe(result => {
      
      this.listBranch = result as Broffice[];
     
    });
    console.log(this.listBranch);
  }

}
