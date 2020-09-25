import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import {ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

declare var jQuery : any;
@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styles: [
  ]
})
export class RequestsComponent implements OnInit {
  public customers : any;
  public managerBranch: any;
  public drivers: any;
  public did:any;
  public id : any;
  public temp : any;

  constructor(private router: Router,private service : ManagerService, private activatedRoute: ActivatedRoute, private toastr: ToastrService) { 
    this.managerBranch = JSON.parse(activatedRoute.snapshot.params["managerBranch"]);

  }

  ngOnInit(): void {
    console.log("in see all req")
    this.service.seeAllRequests(this.managerBranch).subscribe((result:any) => {this.customers = result;})
    this.service.getAllDriversToAllocate(this.managerBranch).subscribe((result:any) => {this.drivers = result});
  }

  showEditPopup(customer: any) {
    console.log("Hello");
    this.temp = customer;
    jQuery('#allocate').modal('show');
  }

  onClickMe(id:any){
    this.service.allocate(id, this.temp.transactionId).subscribe((result:any) => console.log(result));
    this.toastr.success("Driver allocated!", "Success");
    
  }

}
