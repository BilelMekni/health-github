import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicationsService } from 'src/app/services/publications.service';

@Component({
  selector: 'app-espace-patients',
  templateUrl: './espace-patients.component.html',
  styleUrls: ['./espace-patients.component.css']
})
export class EspacePatientsComponent implements OnInit {
  pageOfItems: Array<any>;
  id : any;
  pubs : any;

  constructor(private publicationService : PublicationsService ,  private router : Router) { }

  ngOnInit() {

    this.id = localStorage.getItem("connectedUsers");
    this.publicationService.getPublicationsById(this.id).subscribe(
      (response)=>{
       this.pubs = response.pubs;
      }
    )
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }

    ///voir***//
    voir(){
      this.router.navigate(["envoieNotification"]);
    }

}
