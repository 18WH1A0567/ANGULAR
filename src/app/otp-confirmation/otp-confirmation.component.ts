import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-otp-confirmation',
  templateUrl: './otp-confirmation.component.html',
  styles: [
  ]
})
export class OtpConfirmationComponent implements OnInit {

  public otp : any;
  public transactionId : any;
  constructor(private router : Router,private activatedRoute: ActivatedRoute,private service : ManagerService) { 
    this.transactionId = JSON.parse(activatedRoute.snapshot.params["transactionId"]);
    //console.log(this.transactionId);
     this.service.generateOTP(this.transactionId).subscribe((result:any) => {console.log(result); this.otp = result;});
  }

  ngOnInit(): void {

  }

  validate():any{}

  async confirm(otpForm : any){
    if(otpForm.otp != this.otp){
      alert("OTP did not match!")
    }
    else{
      await this.service.confirmCustomer(this.transactionId, this.otp).subscribe((result:any)=>console.log(result));
      alert("You will be reached shortly by our manager!");
      this.router.navigate(['']);
    }
    
  }



}

