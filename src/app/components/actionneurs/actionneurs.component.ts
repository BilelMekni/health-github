import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actionneurs',
  templateUrl: './actionneurs.component.html',
  styleUrls: ['./actionneurs.component.css']
})
export class ActionneursComponent implements OnInit {
  infos : any = [
    {title : "Chirugie Generale",nom : "Mahmoudi Moncef" , image :"assets/images/chh.jpg"},
    {title : "Medecin Reanimateur",nom : "Samir Mahamdi" , image :"assets/images/rrea.avif"},
    {title : "Medecin Orthopedique",nom : "Hichem Mnif" , image :"assets/images/art.avif"},
    {title : "Medecin Gynecologie",nom : "Amel hasni" , image :"assets/images/sag.jpg"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
