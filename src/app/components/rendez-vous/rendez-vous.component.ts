import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientsService } from 'src/app/services/patients.service';
import { RendezVousService } from './../../services/rendez-vous.service';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {

  rendezForm : FormGroup;
  // Define Object
rendez:any = {};
//id//
id : any;
  constructor(private rendezVousServices : RendezVousService , private router: Router) { }

  ngOnInit() {
  }
  validate(){
    if (this.id) {
      //Edit rendez vous
      
    } else {
      this.rendezVousServices.rendezVous(this.rendez).subscribe(
        (response)=>{
          console.log("Here response rendez vous",response);
          
        }
      )
      
    }
    this.router.navigate(["validerRendez-vous"]);
  }

}
