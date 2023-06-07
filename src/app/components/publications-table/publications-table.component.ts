import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicationsService } from 'src/app/services/publications.service';

@Component({
  selector: 'app-publications-table',
  templateUrl: './publications-table.component.html',
  styleUrls: ['./publications-table.component.css']
})
export class PublicationsTableComponent implements OnInit {
  publications:any;

  constructor(private publicationsService : PublicationsService , private router : Router) { }

  ngOnInit() {
    this.publicationsService.getAllPublications().subscribe(
      (response)=>{
        this.publications = response.publications
        console.log("Here publications",this.publications);
        
      }
    )
  }
  ///***confirme publication//*** */ */
  confirmePublications(id:any){
    this.publicationsService.confirmePublication(id).subscribe(
      (response)=>{
        this.publications =response.message
        this.publicationsService.getAllPublications().subscribe(
          (response)=>{
            this.publications = response.publications
          }
        )

      }

    )
  }
  //*****delete publication width admin //** */ */
  deletePublications(id:any){
    this.publicationsService.deletePublications(id).subscribe(
      (response)=>{
        console.log("here publication by admin after delete",response);
        this.publicationsService.getAllPublications().subscribe(
          (response)=>{
            this.publications = response.publications; 
          }
        )
        
      }
    )
  }

}
