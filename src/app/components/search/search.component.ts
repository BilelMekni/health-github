import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { MedecinsService } from 'src/app/services/medecins.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm:FormGroup;
  id:any;
  searche : any=[];

  constructor(private medecinsService : MedecinsService , private formBuilder : FormBuilder , private router : Router) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      adresse : ["",[Validators.required , Validators.minLength(3) , Validators.maxLength(50)]],
      experiencemax : ["",[Validators.required]],
      experiencemin : ["",[Validators.required]],
    })
    
  }
  search(){
    this.medecinsService.searchMedecins(this.searchForm.value).subscribe(
      (response)=>{
       this.searche = response.searchTab;
       console.log("here search by medecins",this.searche);
       
      }
    )
      
  }

}
