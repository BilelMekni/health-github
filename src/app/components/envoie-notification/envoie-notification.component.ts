import { Component, OnInit } from '@angular/core';
import { ResultatService } from 'src/app/services/resultat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-envoie-notification',
  templateUrl: './envoie-notification.component.html',
  styleUrls: ['./envoie-notification.component.css']
})
export class EnvoieNotificationComponent implements OnInit {
  pageOfItems: Array<any>;
  id:any;
  comment : any;

  constructor(private resultatService : ResultatService , private router : Router) { }

  ngOnInit() {
    this.id = localStorage.getItem("connectedUsers");
    this.resultatService.getResultatById(this.id).subscribe(
      (response)=>{
        this.comment = response.pubs;
     console.log("here comment",this.comment);
     
      }
    )
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }


}
