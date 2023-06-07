import { Component, OnInit } from '@angular/core';
import { MedecinsService } from 'src/app/services/medecins.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medecins-table',
  templateUrl: './medecins-table.component.html',
  styleUrls: ['./medecins-table.component.css']
})
export class MedecinsTableComponent implements OnInit {
  medecins : any=[];
  pageOfItems: Array<any>;
  constructor(private medecinService : MedecinsService , private router : Router) { }

  ngOnInit() {
    this.medecinService.getAllMedecins().subscribe(
      (response)=>{
        this.medecins = response.medecins;
      }
    )
  }
//*** pagination */*** */
onChangePage(pageOfItems: Array<any>) {
  // update current page of items
  this.pageOfItems = pageOfItems;
  }

  //****Confirmation medecins by admin****// */
  confirmeMedecins(id:any){
    this.medecinService.confirmeMedecins(id).subscribe(
      (response)=>{
        this.medecins = response.message;
        this.medecinService.getAllMedecins().subscribe(
          (response)=>{
            this.medecins = response.medecins;
          }
        )
      }
    )
  }
  //***delete Medecins by Id ***/// */
  deleteMedecins(id:any){
    this.medecinService.deleteMedecins(id).subscribe(
      (response)=>{
        console.log("here response after delete medecins",response);
        this.medecinService.getAllMedecins().subscribe(
          (response)=>{
            this.medecins = response.medecins;
          }
        )
      }
    )
  }
  //*****update medecins//*** */ */
  updateMedecins(id : any){
    this.router.navigate([`modifierMedecins/${id}`]);

  }
}
