import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-patients-table',
  templateUrl: './patients-table.component.html',
  styleUrls: ['./patients-table.component.css']
})
export class PatientsTableComponent implements OnInit {
patients : any=[];
pageOfItems: Array<any>;

  constructor(private patientsService : PatientsService , private router : Router) { }

  ngOnInit() {
    this.patientsService.getAllPatients().subscribe(
      (response)=>{
        this.patients = response.patients
      }
    )
  }

  //*** pagination */*** */
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }

    ///****confirmation *////
    confirmePatients(id:any){
    this.patientsService.confirmePatients(id).subscribe(
      (response)=>{
      this.patients = response.message;
      this.patientsService.getAllPatients().subscribe(
        (response)=>{
          this.patients = response.patients
        }
      )
      }
    )
    

    }
    ///**** delete patients by admin//*** */ */
    deletePatients(id:any){
      this.patientsService.deletePatients(id).subscribe(
        (response)=>{
          console.log("here response after delete patients",response);
          this.patientsService.getAllPatients().subscribe(
            (response)=>{
              this.patients = response.patients;
            }
          )
          
        }
      )
    }
    //****update patients by admin ****/
    updatePatients(id:any){
      this.router.navigate([`modifierPatients/${id}`]);
    }


}
