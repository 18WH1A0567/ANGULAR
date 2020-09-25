import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-show-all-customers',
  templateUrl: './show-all-customers.component.html',
  styles: [
  ]
})
export class ShowAllCustomersComponent implements OnInit {

  public customers : any;
  public result : any;
  constructor(private service : AdminService) { }

  ngOnInit(): void {
    this.service.getAllCustomers().subscribe((result:any) => {this.customers = result;});
    
  }

}
