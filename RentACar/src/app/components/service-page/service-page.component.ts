import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import { GlobalService } from '../../service/global.service';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {
  serviceName:string;

  constructor(private route: ActivatedRoute,private globalService:GlobalService) { }

  ngOnInit() {
    this.serviceName=this.globalService.getService();
  }

}
