import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MedecinsService } from 'src/app/services/medecins.service';

@Component({
  selector: 'app-modifier-medecins',
  templateUrl: './modifier-medecins.component.html',
  styleUrls: ['./modifier-medecins.component.css']
})
export class ModifierMedecinsComponent implements OnInit {
  modifierForm : FormGroup;
  id : any;
  message : any;

  constructor(private medecinsService : MedecinsService , private formBuilder : FormBuilder , private router : Router ,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);
    this.modifierForm = this.formBuilder.group({
      telephone:["",[Validators.required , Validators.minLength(8),Validators.maxLength(8)]],
      adresse:["",[Validators.required , Validators.minLength(3), Validators.maxLength(30)]],
    })
    this.medecinsService.getMedecinById(this.id).subscribe(
      (response)=>{
console.log("here update medecins",response);
this.message = response.medecins;
this.modifierForm .patchValue(this.message);

      }
    )
    
  }
  update(){
    this.modifierForm.value._id = this.id;
    console.log("here is edit form medecins",this.modifierForm.value);
    this.medecinsService.updateMedecins(this.modifierForm.value).subscribe(
      (response)=>{
        console.log("here is response medecins",response);
        this.router.navigate(["admin"]);
        
      }
    )
    
  }


}
