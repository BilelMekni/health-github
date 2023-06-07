import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultatService } from 'src/app/services/resultat.service';

@Component({
  selector: 'app-resultat-table',
  templateUrl: './resultat-table.component.html',
  styleUrls: ['./resultat-table.component.css']
})
export class ResultatTableComponent implements OnInit {
  resultats : any;

  constructor(private resultatService : ResultatService , private router : Router) { }

  ngOnInit() {
    this.resultatService.getAllResultas().subscribe(
      (response)=>{
        this.resultats = response.resultats;
        console.log("Here resultats",this.resultats);
      }
    )
  }
  //***confirmations resultats//*** */ */
  confirmerResultat(id:any){
    this.resultatService.confirmeResultat(id).subscribe(
      (response)=>{
        this.resultats = response.message
        this.resultatService.getAllResultas().subscribe(
          (response)=>{
            this.resultats = response.resultats;
          }
        )
      }
    )
    
  }
  ////****delete resultats admin by id//*** */ */
  deleteResultas(id : any){
    this.resultatService.deleteResultats(id).subscribe(
      (response)=>{
       console.log("here resultas after delete" ,response);
       
        this.resultatService.getAllResultas().subscribe(
          (response)=>{
            this.resultats = response.resultats;
          }
        
          )
      
      }
      
      
    )
  }

}
