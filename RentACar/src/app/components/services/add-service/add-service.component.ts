import {Component, OnInit} from '@angular/core';
import {Service} from '../../../model/service';
import {ServiceService} from '../../../service/service.service';
import {Router} from '@angular/router';
import {MessageService} from '../../../service/message-service.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  services: Service[];

  constructor(private serviceService: ServiceService, private router: Router, private messageService: MessageService) {
  }

  ngOnInit() {
    this.services = [];
    this.getAllServices();
  }

  getAllServices() {
    this.serviceService.getAllServices().subscribe(result => {
      this.services = result as Service[];
      console.log(result);
    });
  }


  addBranchOffice(service: Service) {
    this.messageService.sendMessage(service);
    this.router.navigate(['/branch-offices']);
  }
}
