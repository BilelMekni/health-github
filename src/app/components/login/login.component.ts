import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientsService } from 'src/app/services/patients.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  errorMsg: any;


  constructor(private formBuilder : FormBuilder , private router : Router , private patientsService : PatientsService) { }

  ngOnInit() {
  this.loginForm = this.formBuilder.group({
    email : ["",[Validators.required,Validators.email]],
    telephone : ["",[Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
    password : ["",[Validators.required,Validators.minLength(8),Validators.maxLength(12)]],
  })
  }

//***  partie login */
login(){
  this.patientsService.login(this.loginForm.value).subscribe(
    (response) => {
      console.log("Here response after login ", response);
      if (response.msg != "2") {
        // message error
        this.errorMsg = "Please check Email/Pwd";
      } else {
        // localStorage////
        localStorage.setItem("connectedUsers",response.user.id);
        if (response.user.role == "patients") {
          this.router.navigate(["informationPrincipale"]);
        } else {
          this.router.navigate([""]);
        }
      }

    }
  );
  Swal.fire({
    title: 'Your Information was Clear',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
}
comptePatients(){
    this.router.navigate(["signupPatients"])
}
}


