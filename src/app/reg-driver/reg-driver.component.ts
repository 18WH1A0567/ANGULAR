import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import {ActivatedRoute } from "@angular/router";
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-reg-driver',
  templateUrl: './reg-driver.component.html',
  styles: [
  ]
})
export class RegDriverComponent implements OnInit {
  public driver:any;
  public loginId:any;
  public manager : any;

  constructor(private service : ManagerService,  private activatedRoute: ActivatedRoute,  private toastr: ToastrService) {
    
    this.driver = {driverBranch:'', driverName: '', driverPhone: '', 
                   driverStatus : null ,salary: 5000, vehicleCharges: '',
                   vehicleId: '', vehicleType: '', 
                   manager : ''
  }
                  
   this.loginId = JSON.parse(activatedRoute.snapshot.params["loginId"]);
  };

  ngOnInit(): void {
    this.service.getMangerByManagerId(this.loginId).subscribe((result:any) => {this.manager = result;})
  }
  RegisterDriver(RegisterForm:any):void{

    
    this.driver.salary = 5000
    this.driver.driverBranch = this.manager.managerBranch;
    this.driver.manager = this.manager;
    console.log(this.driver)
    this.service.registerDriver(this.driver).subscribe((result:any) => {console.log("Driver added!"); this.toastr.success('Registration successful', 'Success!!');});
    
  }

}
