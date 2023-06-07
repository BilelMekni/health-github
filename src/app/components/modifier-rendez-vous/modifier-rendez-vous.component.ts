import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RendezVousService } from 'src/app/services/rendez-vous.service';

@Component({
  selector: 'app-modifier-rendez-vous',
  templateUrl: './modifier-rendez-vous.component.html',
  styleUrls: ['./modifier-rendez-vous.component.css']
})
export class ModifierRendezVousComponent implements OnInit {
  modifierForm : FormGroup;
  id : any;
  rendez : any;

  constructor(private rendezVousService : RendezVousService , private formBuilder : FormBuilder,
    private router : Router , private activatedRoute : ActivatedRoute) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);
    this.modifierForm = this.formBuilder.group({
      firstName:["",[Validators.required , Validators.minLength(3),Validators.maxLength(20)]],
      lastName:["",[Validators.required , Validators.minLength(3), Validators.maxLength(20)]],
      telephone:["",[Validators.required , Validators.minLength(8), Validators.maxLength(8)]],
      adresse:["",[Validators.required , Validators.minLength(3) , Validators.maxLength(30)]],
      description:["",[Validators.required , Validators.minLength(3), Validators.maxLength(50)]],
      select:[""],
      date:[""],
    })
    this.rendezVousService.getrendezById(this.id).subscribe(
      (data)=>{
        console.log("here rendez vous",data);
        this.rendez = data.rendez;
        this.modifierForm.patchValue(this.rendez);
        
      }
    )
  

  }
  modifier(){
    this.modifierForm.value._id=this.id;
    console.log("here is edit form",this.modifierForm.value)
    this.rendezVousService.editRendezVous(this.modifierForm.value).subscribe(
        (response) => { 
          console.log("here reponse is ", response);
          this.router.navigate(["validerRendez-vous"]);
        });
  }

  

}
