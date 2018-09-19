import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../service/global.service';
import { Service } from '../../../model/service';
import { ServiceService } from '../../../service/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent implements OnInit {

  constructor(private globalService:GlobalService, private serviceService: ServiceService,
              private toaster: ToastrService) { }
  service:Service;
  ngOnInit() {
    this.service=this.globalService.getServiceObject();
  }

  updateService() {
      console.log(this.service.Description);

    this.serviceService.updateService(this.service).subscribe(data => {
      console.log(this.service);
      this.toaster.success("Service succesfully updated");
    },()=>{
      this.toaster.error("Something wrong");
      return;
    }
  
  );
  }

}
