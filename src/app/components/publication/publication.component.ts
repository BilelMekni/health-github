import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PublicationsService } from 'src/app/services/publications.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  publicationForm : FormGroup;
  id : any;
// Define Object
publication: any = {};
publ :any;
actualDate : any;
  constructor(private publicationService : PublicationsService , private router : Router) { }

  ngOnInit() {
   
    this.id = localStorage.getItem("connectedUsers");
    this.publicationService.getPublicationsById(this.id).subscribe(
      (response)=>{
        this.publ = response.pubs
      }
    )
  }
  ////add publication****/////
  validate(){
    if (this.id) {
      //edit publication

      // add publication
      
      
        this.publication.patientsId = this.id;
      this.publication.status = "Not Confirmed";
      this.publication.reservation = "waiting";
        this.publicationService.addPublication(this.publication).subscribe(
          (response)=>{
            console.log("here response publication patients",response);
            
          }
        );
        
      }  
      
    
    Swal.fire({
      title: 'Sweet!',
      text: 'Welcome To Publication Patients.',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
    this.router.navigate([""]);

  }
  //****retour en arriere */
  retour(){
    this.router.navigate(["informationPrincipale"]);
  }

}
