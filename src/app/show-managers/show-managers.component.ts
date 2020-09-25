import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-show-managers',
  templateUrl: './show-managers.component.html',
  styles: [
  ]
})
export class ShowManagersComponent implements OnInit {

  public managers : any;
  constructor(private service : AdminService) { }

  ngOnInit(): void {
    this.service.getAllManager().subscribe((result:any) => {this.managers = result;})
  }

}
