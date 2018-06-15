import {Component, OnInit} from '@angular/core';
import {Service} from '../../../model/service';
import {ServiceService} from '../../../service/service.service';
import {Router} from '@angular/router';
import {MessageService} from '../../../service/message-service.service';
import {User} from '../../../model/user';
import { GlobalService } from '../../../service/global.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  services: Service[];
  service: Service;

  constructor(private serviceService: ServiceService, private router: Router, private globalService: GlobalService) {
  }

  ngOnInit() {
    this.services = [];
    this.getAllServices();
    this.service = new Service();
  }

  getAllServices() {
    this.serviceService.getAllServices().subscribe(result => {
      this.services = result as Service[];
      console.log(result);
    });
  }


  addBranchOffice(service: Service) {
    console.log(service);
    this.globalService.setService(service.Name);
    this.router.navigate(['/branch-offices']);
  }

  addService() {

    this.serviceService.addService(this.service).subscribe(data => {

    });
  }
}
