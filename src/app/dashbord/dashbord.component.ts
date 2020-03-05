import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  data;
  constructor(private sharedService : SharedService) { }

  ngOnInit() {
    this.data=this.sharedService.getData();
    console.log(this.data.email);
    console.log(this.data.psw);
    
  }

}
