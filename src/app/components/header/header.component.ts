import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { MedecinsService } from 'src/app/services/medecins.service';
import { PatientsService } from 'src/app/services/patients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  id:any;
  connectedUsers : any = {};

  constructor(private patientsServices : PatientsService , private medecinsService : MedecinsService ,
    private adminService : AdminService , private router : Router) { }

  ngOnInit() {
 this.id = localStorage.getItem("connectedUsers");
 this.patientsServices.getPatientsById(this.id).subscribe(
  (response)=>{
    this.connectedUsers = response.patients;
    console.log("here patients connected",this.connectedUsers);
    
  }
 )
 this.medecinsService.getMedecinById(this.id).subscribe(
  (response)=>{
    this.connectedUsers = response.medecins;
    console.log("here medecins connected",this.connectedUsers);
    
  }
 )
 this.adminService.getAdminById(this.id).subscribe(
  (response)=>{
    this.connectedUsers = response.admin;
    console.log("here admin connected",this.connectedUsers);
    
  }
 )
  }
  logOut(){
    localStorage.removeItem("connectedUsers");
    this.router.navigate([""]);
  }
  search(){
    this.router.navigate(["search"])
  }

  ///**** boutonn connexion /*******/
  connexion(){
    this.router.navigate(["login"])
  }
}
