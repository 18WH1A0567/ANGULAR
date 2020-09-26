import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import {ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-show-drivers',
  templateUrl: './show-drivers.component.html',
  styles: [
  ]
})
export class ShowDriversComponent implements OnInit {

  public drivers : any;
  public managerBranch: any;
  public manager: any;

  constructor(private service : ManagerService, private activatedRoute: ActivatedRoute) {
    //this.managerBranch = JSON.parse(activatedRoute.snapshot.params["managerBranch"]);
   }

  ngOnInit(): void {
    this.manager = JSON.parse(localStorage.getItem('manager'));
    this.service.getAllDriversBranchwise(this.manager.managerBranch).subscribe((result:any) => {this.drivers = result;console.log(result)})
  }

}
