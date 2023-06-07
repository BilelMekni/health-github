import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedecinsService } from 'src/app/services/medecins.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  id:any;
  medecins:any;

  constructor(private medecinsServices : MedecinsService , private router : Router) { }

  ngOnInit() {
    // this.id = localStorage.getItem("connectedUsers");
    this.medecinsServices.getAllMedecins().subscribe(
      (response)=>{
        this.medecins = response.medecins
        // console.log("Here verification medecins", this.medecins);

      }
    )
  }

  //***bouton accepter /// */** */
  accepter(){
  this.router.navigate(["rendezVous"]);
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'wellcome to interface prise de rendez vous',
    showConfirmButton: false,
    timer: 1500
  })
  }
  //**** bouton retour en arriere *//*
  retour(){
    this.router.navigate([""]);
  }
  //*** prix */
  prix(){
    Swal.fire({
      title: 'Consultation :[70.00 dt], Operation Simple : [300...800], Operation Chirugical : [900....5000] , Opertion Par Coelio : [1000 ... 100000]',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

}
