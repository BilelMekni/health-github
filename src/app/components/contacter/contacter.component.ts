import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-contacter',
  templateUrl: './contacter.component.html',
  styleUrls: ['./contacter.component.css']
})
export class ContacterComponent implements OnInit {
  contactForm : FormGroup;
  id : any;
  contact : any;
  // Define Object
  contacte: any = {};
  path:any;


  constructor(private adminService : AdminService , private router : Router,
    private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.path = this.router.url;
    this.contactForm = this.formBuilder.group(
      {
        firstName : ["",[Validators.required , Validators.minLength(3),Validators.maxLength(50)]],
        email : ["",[Validators.required , Validators.email]],
        telephone : ["",Validators.required ,  Validators.minLength(8), Validators.maxLength(8)],
        description : ["",[Validators.required , Validators.minLength(3), Validators.maxLength(100)]],
        
      }
    )

  }
  contacter(){
   
    this.adminService.addContacter(this.contactForm.value).subscribe(
      (response)=>{
        console.log("here contacter",response);
        
      }
    )
    this.router.navigate([""]);
  }
     
      
    

  }


