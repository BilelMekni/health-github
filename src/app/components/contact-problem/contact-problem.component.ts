import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-contact-problem',
  templateUrl: './contact-problem.component.html',
  styleUrls: ['./contact-problem.component.css']
})
export class ContactProblemComponent implements OnInit {
  pageOfItems: Array<any>;
  contact:any=[];

  constructor(private adminService : AdminService , private router : Router) { }

  ngOnInit() {
    this.adminService.getContactProblem().subscribe(
      (response)=>{
        this.contact = response.contact;
        console.log("here all contact problem",this.contact);
        
      }
    )
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }
    //***delete contact problem width admin//*** */ */
    deleteContactProblem(id:any){
      this.adminService.deleteConatctProblem(id).subscribe(
        (response)=>{
          console.log("Here response after delete contact problelem",response);
          this.adminService.getContactProblem().subscribe(
            (response)=>{
              this.contact = response.contact;
            }
          )
          
        }
      )
    }

}
