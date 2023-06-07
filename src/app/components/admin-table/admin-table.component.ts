import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent implements OnInit {
  admin:any=[];
  pageOfItems: Array<any>;

  constructor(private adminService : AdminService) { }

  ngOnInit() {
    this.adminService.getAllAdmin().subscribe(
      (response)=>{
        this.admin = response.admin;
      }
    )
  }
   //*** pagination */*** */
   onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }

}
