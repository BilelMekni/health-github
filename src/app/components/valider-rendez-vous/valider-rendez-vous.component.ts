import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RendezVousService } from 'src/app/services/rendez-vous.service';

@Component({
  selector: 'app-valider-rendez-vous',
  templateUrl: './valider-rendez-vous.component.html',
  styleUrls: ['./valider-rendez-vous.component.css']
})
export class ValiderRendezVousComponent implements OnInit {
  rendez : any;
  pageOfItems: Array<any>;

  constructor(private rendezVousService : RendezVousService , private router : Router) { }

  ngOnInit() {
    this.rendezVousService.getAllRendezVous().subscribe(
      (response)=>{
        this.rendez = response.rendez;
      }
    )

  }
  //*** pagination */*** */
onChangePage(pageOfItems: Array<any>) {
  // update current page of items
  this.pageOfItems = pageOfItems;
  }
  ///****delete rendez vous patients by id**// */
  deleteRendezVous(id:any){
    this.rendezVousService.delteRendezVous(id).subscribe(
      (response)=>{
       console.log("here rendez vous after delete",response);
       
        this.rendezVousService.getAllRendezVous().subscribe(
          (response)=>{
            this.rendez = response.rendez;
          }
        )
      }
    )

  }
  //*** updat rendez vous */
  updateRendez(id : any){
    this.router.navigate([`modifierRendez-vous/${id}`]);
  }

}
