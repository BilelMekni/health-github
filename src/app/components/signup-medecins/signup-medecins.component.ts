import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MedecinsService } from 'src/app/services/medecins.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-signup-medecins',
  templateUrl: './signup-medecins.component.html',
  styleUrls: ['./signup-medecins.component.css']
})
export class SignupMedecinsComponent implements OnInit {
  signupForm:FormGroup;  
imagePreview : any;

cvPreview:any;
path : string;   
id : any;

  constructor(private formBuilder : FormBuilder , private router : Router ,
    private medecinsService : MedecinsService) { }

  ngOnInit() {
    this.path = this.router.url;
    this.signupForm = this.formBuilder.group({
      firstName:["",[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      lastName:["",[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      telephone:["",[Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.minLength(8),Validators.maxLength(20)]],
      specialite:["",[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
      experience:["",[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      matricule:["",[Validators.required,Validators.minLength(6),Validators.maxLength(8)]],
      adresse:["",[Validators.required,Validators.minLength(4),Validators.maxLength(30)]],
      gender:[""],
      cv:[""],
      img:[""],

    })

  }
  signup(){
  let medecin = this.signupForm.value;
  medecin.role = "medecins";
  medecin.status="not confirmed";
  this.medecinsService.signup(medecin,this.signupForm.value.img ,this.signupForm.value.cv).subscribe(
  (response) =>{
    console.log("here reseponse",response);
    
  });
  Swal.fire({
    title: 'Votre Insertion a ete bien successe!',
    text: 'wellecome to signup Doctors.',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
}
////*******login */
login(){
  this.router.navigate(["login"]);
  Swal.fire('Hellow My Login');
}


  onImageSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);


}

//// partie cv ////
////////////
onCVSelected(event: Event) {
  const file = (event.target as HTMLInputElement).files[0];
  this.signupForm.patchValue({ cv: file });
  this.signupForm.updateValueAndValidity();
  const reader = new FileReader();
  reader.onload = () => {
  this.cvPreview = reader.result as string
  };
  reader.readAsDataURL(file);




}
}