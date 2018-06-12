import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {MessageService} from '../../../service/message-service.service';

@Component({
  selector: 'app-add-branch-office',
  templateUrl: './add-branch-office.component.html',
  styleUrls: ['./add-branch-office.component.css']
})
export class AddBranchOfficeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private messageService: MessageService) {
  }

  ngOnInit() {
    this.messageService.currentMessage.subscribe(object => {
      console.log(object);
    });
  }

}
