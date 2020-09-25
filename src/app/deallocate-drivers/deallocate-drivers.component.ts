import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import {ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-deallocate-drivers',
  templateUrl: './deallocate-drivers.component.html',
  styles: [
  ]
})
export class DeallocateDriversComponent implements OnInit {

  public managerBranch: any;
  public drivers : any;

  constructor(private service : ManagerService, private activatedRoute: ActivatedRoute, private toastr: ToastrService) {
    this.managerBranch = JSON.parse(activatedRoute.snapshot.params["managerBranch"]);
   }

  ngOnInit(): void {
    this.service.getAllDriversToDeallocate(this.managerBranch).subscribe((result:any) => {this.drivers = result});
  }

  async deallocate(driver:any){
    console.log(driver);
    await this.service.changeDriverStatus(driver).subscribe((result:any) => {this.toastr.success("Deallocation successful", "Success")});
    
  }
}
