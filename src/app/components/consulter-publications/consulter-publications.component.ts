import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicationsService } from 'src/app/services/publications.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-consulter-publications',
  templateUrl: './consulter-publications.component.html',
  styleUrls: ['./consulter-publications.component.css']
})
export class ConsulterPublicationsComponent implements OnInit {
  id : any;
  pubs:any;
 

  constructor(private publicationService : PublicationsService , private router : Router) { }

  ngOnInit() {
    this.id = localStorage.getItem("connectedUsers");
    this.publicationService.getPublicationsConfirme().subscribe(
      (response)=>{
        this.pubs = response.pubs
        console.log("here pubs confirme",this.pubs);
        
      }
    )
  }
  //****partie contacter //**** */ */
  Contacter(pub:any) {
    
    Swal.fire({
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      title: 'Wellcome?',
      html:`First Name: ${pub.patients[0].firstName}&& ${pub.patients[0].lastName}<br> Email: ${pub.patients[0].email} <br> Adress: ${pub.patients[0].adresse}`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Accepter Votre Demande De Publication'
    }).then((result) => {
      if (result.isConfirmed) {
        this.publicationService.postNotif({_id:pub._id, userId: this.id, reservation: 'reserved' }).subscribe(
          (response) => {
            console.log("here notif", response)
          });
          
        Swal.fire(
          'Confirmed!',
          'Your file has been confirmed.',
          'success'
        )
      }
    })
    this.router.navigate([""]);

  }

}
