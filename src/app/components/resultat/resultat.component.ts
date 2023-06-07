import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ResultatService } from 'src/app/services/resultat.service';


@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {
  resultatForm : FormGroup;
  id : any;
  resultat : any = {};
  result : any;
  actualDate : any;
  

  constructor(private resulatService : ResultatService , private router : Router) { }

  ngOnInit() {
   
    this.id = localStorage.getItem("connectedUsers");
    this.resulatService.getResultatById(this.id).subscribe(
      (response)=>{
        this.result = response.pubs
      }
    )
   
  }
//***add resultat*//// */
validate(){
  if (this.id) {
    this.resultat.medecinsId = this.id;
      this.resultat.status = "Not Confirmed";
      this.resultat.accepter = "acceptation";
  
this.resulatService.addresultat(this.resultat).subscribe(
  (response)=>{
console.log("here reponse resultat",response);

  }
)
    
  }
  this.router.navigate([""]);

}
retour(){
  this.router.navigate(["informationPrincipale"]);
}
}
