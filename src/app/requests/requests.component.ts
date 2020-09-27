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
  public manager : any;
  public message:any;

  constructor(private router: Router,private service : ManagerService, private activatedRoute: ActivatedRoute, private toastr: ToastrService) {  
   
  }

  ngOnInit(): void {
    this.manager = JSON.parse(localStorage.getItem('manager'));
    this.service.seeAllRequests(this.manager.managerBranch).subscribe((result:any) => {this.customers = result;})
    this.service.getAllDriversToAllocate(this.manager.managerBranch).subscribe((result:any) => {this.drivers = result});
  }

  showEditPopup(customer: any) {
    console.log("Hello");
    this.temp = customer;
    jQuery('#allocate').modal('show');
  }

  onClickMe(id:any){
    this.temp.manager = this.manager;
    var i = this.customers.indexOf(this.temp);
    this.customers.splice(i,1);
    for (let index = 0; index < this.drivers.length; index++) {
      if (this.drivers[index].vehicleId == id) {
        var j = index;
        break;
        
      };      
    }
    console.log(j);
    this.drivers.splice(j,1);
    this.temp.manager = this.manager;
    /*this.service.updateCustomer(this.temp).subscribe((res:any)=>{console.log(res);
      this.service.updateDriver(id).subscribe((resi:any) => {console.log(resi)});
      //this.service.allocate(id, this.temp).subscribe((result:any) => console.log(result));
    });*/
    
    this.toastr.success("Driver allocated!", "Success");
    this.service.allocate(id, this.temp).subscribe((result:any) => console.log(result));
    this.id = '';
    
  }

  showRejectPopup(customer: any) {
    console.log("Hello");
    this.temp = customer;
    jQuery('#reject').modal('show');
  }

  onClickMeReject(){
    console.log(this.message);
    var i = this.customers.indexOf(this.temp);
    this.customers.splice(i,1);
    this.toastr.success("Customer request rejected!", "Success");
    this.service.rejectCustomer(this.temp, this.message).subscribe((res:any)=>{console.log("Done");
    this.message = '';
    });

  }

}
