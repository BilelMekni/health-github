import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientsService } from 'src/app/services/patients.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-signup-patients',
  templateUrl: './signup-patients.component.html',
  styleUrls: ['./signup-patients.component.css']
})
export class SignupPatientsComponent implements OnInit {
  signupForm: FormGroup
  imagePreview: any;
  path: string;
  pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";

  constructor(private router: Router, private formBuilder: FormBuilder , private patientsService : PatientsService) { }

  ngOnInit() {
    this.path = this.router.url;
   
    this.signupForm = this.formBuilder.group({
      firstName : ["", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      lastName : ["", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      telephone : ["", [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      email : ["",[Validators.required , Validators.email]],
      password : ["",[Validators.required , Validators.pattern(this.pwdPattern)]],
      adresse : ["",[Validators.required , Validators.minLength(3), Validators.maxLength(30)]],
      gender : [""],
      img:[""],
    })
  }

///**** Signup///**** */ */
signup(){
  let patients = this.signupForm.value;
  patients.role = "patients";
  patients.status = "not confirmed";
  console.log("here object",this.signupForm.value);
  let role = (this.path == "/signupPatients")? "patients":"medecins";
  this.signupForm.value.role = role;
  this.patientsService.signup(this.signupForm.value,this.signupForm.value.img).subscribe(
    (response)=>{
      console.log("here after signup",response);
      
    }
  ); 
  Swal.fire({
    title: 'Hellow Mr Or Mm Patients!',
    text: 'your insertion was successful',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  }) 
}



  //*** bouton login ***//////
  login() {
    this.router.navigate(["login"]);
    Swal.fire('Wellcome To My Login')

  }

  ///**  image des patients *////
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  
  }

}
