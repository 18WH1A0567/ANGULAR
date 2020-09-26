import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private isUserLogged:any;
  public result : any;
  constructor(private httpClient : HttpClient) {
    this.isUserLogged = false;
   }

  setUserLoggedIn():void{
    this.isUserLogged = true;
  }

  setUserLoggedOut():void{
    this.isUserLogged = false;
  }

  getUserLogged(): any{
    return this.isUserLogged;
  }

  getManagerById(loginId : any , password : any){
    this.result = loginId + ' ' + password;
    return this.httpClient.get('MovingMadeEasy/webapi/myresource/getManagerById/'+ this.result);
  }

  getMangerByManagerId(loginId : any){
    return this.httpClient.get('MovingMadeEasy/webapi/myresource/getMangerByManagerId/'+ loginId);
  }

  getAllDriversBranchwise(managerBranch : any){
    return this.httpClient.get('MovingMadeEasy/webapi/myresource/getAllDriversBranchwise/'+ managerBranch);
  }

  getAllDriversToAllocate(branch: any){
    return this.httpClient.get('MovingMadeEasy/webapi/myresource/getAllDriversToAllocate/'+ branch);
  }

  getAllDriversToDeallocate(branch:any){
    return this.httpClient.get('MovingMadeEasy/webapi/myresource/getAllDriversToDeallocate/'+ branch);
  }

  getCustomer(transactionId : any){
    return this.httpClient.get('MovingMadeEasy/webapi/myresource/getCustomer/' + transactionId);
  }

  getCustomerToAllocate(transactionId : any){
    return this.httpClient.get('MovingMadeEasy/webapi/myresource/getCustomerToAllocate/' + transactionId);
  }

  registerDriver(driver: any){
    return this.httpClient.post('MovingMadeEasy/webapi/myresource/registerDriver', driver);
  }

  registerCustomer(customer: any){
    return this.httpClient.post('MovingMadeEasy/webapi/myresource/registerCustomer', customer);
  }
  seeAllRequests(managerBranch: any){
    return this.httpClient.get('MovingMadeEasy/webapi/myresource/seeAllRequests/' + managerBranch);
  }

  generateBill(customer:any){
    return this.httpClient.get('MovingMadeEasy/webapi/myresource/generateBill/' + customer);
  }

  allocate(did: any, customer : any){
    const formData : FormData = new FormData();
    var temp = JSON.stringify(customer);
    formData.append('customer',temp);
    formData.append('driver',did);
    return this.httpClient.post('MovingMadeEasy/webapi/myresource/allocate' ,formData);
  }

  generateOTP(transactionId:any){
    return this.httpClient.get('MovingMadeEasy/webapi/myresource/generateOTP/' + transactionId);
  }

  confirmCustomer( customer:any){
    //this.result = String(transactionId) + ' ' + String(otp);
    return this.httpClient.post('MovingMadeEasy/webapi/myresource/confirmCustomer', customer);
  }

  changeDriverStatus(driver: any){
    return this.httpClient.post('MovingMadeEasy/webapi/myresource/changeDriverStatus' , driver);
  }


}
