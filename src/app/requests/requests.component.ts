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

  constructor(private router: Router,private service : ManagerService, private activatedRoute: ActivatedRoute, private toastr: ToastrService) {  
    this.temp = { transactionId:'', bill:'', custName:'', custPhone:'',
                  date:'', destinationArea:'',destinationState:'', requirements:'',
                  residentArea:'',residentState:'',vehicleType:'',email:'',otp:'',
                  manager : { loginId: '', managerBranch:'', managerId:'', managerName:'',
                  managerPhone:'',managerSalary:'', password:''}
                }
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
    console.log(this.temp);
    this.service.allocate(id, this.temp).subscribe((result:any) => console.log(result));
    this.toastr.success("Driver allocated!", "Success");
    
  }

}
