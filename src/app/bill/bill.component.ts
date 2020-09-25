import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { ManagerService } from '../manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styles: [
  ]
})
export class BillComponent implements OnInit {
  public transactionId:any;
  public output: any;
  public bill:any;

  constructor(private router : Router,private service : ManagerService,private activatedRoute: ActivatedRoute, private toastr: ToastrService) {
    this.transactionId = JSON.parse(activatedRoute.snapshot.params["Id"]);
    this.service.getCustomer(this.transactionId).subscribe((result:any) => {this.output = result;console.log(result);});
   }

  ngOnInit(): void {
   
    
    //console.log(this.customer)
  }

  confirm():any{
    this.router.navigate(['app-customer-registration/app-bill/app-otp-confirmation',JSON.stringify(this.transactionId)]);

  }

}
