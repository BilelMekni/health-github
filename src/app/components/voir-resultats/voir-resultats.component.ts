import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultatService } from 'src/app/services/resultat.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-voir-resultats',
  templateUrl: './voir-resultats.component.html',
  styleUrls: ['./voir-resultats.component.css']
})
export class VoirResultatsComponent implements OnInit {
  id : any;
  result : any;

  constructor(private resultatService : ResultatService , private router : Router) { }

  ngOnInit() {
    this.id = localStorage.getItem("connectedUsers");
    this.resultatService.getConfirmeMedecins().subscribe(
      (response)=>{
        this.result = response.result;
        console.log("here resultat confirme by medecins",this.result);
        
      }
    )

  }
  ///****pariter Envoyer reponse aux patients (boutons envoyer) *****/
  envoyer(pub:any) {
    
    Swal.fire({
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      title: 'Wellcome?',
      html:`First Name: ${pub.medecins[0].firstName}&& ${pub.medecins[0].lastName}<br> Email: ${pub.medecins[0].email} <br> Adress: ${pub.medecins[0].adresse}`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Accepter Votre Demande'
    }).then((result) => {
      if (result.isConfirmed) {
        this.resultatService.notificationMedecins({_id:pub._id, userId: this.id, accepter: 'accepted' }).subscribe(
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
