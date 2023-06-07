import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/app/services/patients.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { logWarnings } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-modifier-patients',
  templateUrl: './modifier-patients.component.html',
  styleUrls: ['./modifier-patients.component.css']
})
export class ModifierPatientsComponent implements OnInit {
  modifierForm : FormGroup;
  id:any;
  patients : any;

  constructor(private patientsService : PatientsService , private router : Router , private formBuilder : FormBuilder,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
   this.id = this.activatedRoute.snapshot.paramMap.get("id");
   console.log(this.id);
   this.modifierForm = this.formBuilder.group({
    telephone:["",[Validators.required , Validators.minLength(8), Validators.maxLength(8)]],
    adresse:["",[Validators.required , Validators.minLength(3), Validators.maxLength(30)]]
   })
   this.patientsService.getPatientsById(this.id).subscribe(
    (response)=>{
      console.log("here patients id",response);
      this.patients = response.patients;
      this.modifierForm.patchValue(this.patients);
      
    }
   )
   
    

  }
  update(){
    this.modifierForm.value._id = this.id;
    console.log("here edit form patients",this.modifierForm.value);
    this.patientsService.updatePatients(this.modifierForm.value).subscribe(
      (response)=>{
        console.log("here reponse update patients",response);
        this.router.navigate(["admin"]);
        
      }
    )

  }

}
