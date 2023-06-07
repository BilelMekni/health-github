import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-features',
  templateUrl: './key-features.component.html',
  styleUrls: ['./key-features.component.css']
})
export class KeyFeaturesComponent implements OnInit {
  structures : any = [
    {nom : "Mourad Jaouadi", title : "General Manager", image : "assets/images/directeur.jpg"},
    {nom : "Mohamed Hammami" , title : "Assistant Director" , image : "assets/images/sousdirecteur.jpg"},
    {nom : "Nabila Guesmi" , title : "Human ressources" , image : "assets/images/rh.jpg"},
    {nom : "Amel Chebbi" , title : "Finances & Accounting" , image : "assets/images/finance.jpg"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
