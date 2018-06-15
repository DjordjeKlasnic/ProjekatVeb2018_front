import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {MessageService} from '../../../service/message-service.service';
import {Service} from '../../../model/service';
import {Broffice} from '../../../model/broffice';
import { BranchServiceService } from '../../../service/branch-service.service';
import { GlobalService } from '../../../service/global.service';

@Component({
  selector: 'app-add-branch-office',
  templateUrl: './add-branch-office.component.html',
  styleUrls: ['./add-branch-office.component.css']
})
export class AddBranchOfficeComponent implements OnInit {

  
  bo:Broffice;
  serviceName:string;

  constructor(private route: ActivatedRoute,private branchService:BranchServiceService,private globalService:GlobalService) {
  }

  ngOnInit() {
    this.bo=new Broffice();
    this.serviceName=this.globalService.getService();
    console.log(this.serviceName);
  }

  addBranchOffice(){
    this.bo.ServiceName=this.serviceName;
    
    this.branchService.addBranch(this.bo).subscribe(data => {

    });
  }

}
