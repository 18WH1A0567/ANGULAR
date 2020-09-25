import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-show-all-drivers',
  templateUrl: './show-all-drivers.component.html',
  styles: [
  ]
})
export class ShowAllDriversComponent implements OnInit {
  public drivers : any;

  constructor(private service : AdminService) { }

  ngOnInit(): void {
    this.service.getAllDrivers().subscribe((result:any) => {this.drivers = result; console.log(result)});    
  }

}
