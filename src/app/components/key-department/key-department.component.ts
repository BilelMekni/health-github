import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-department',
  templateUrl: './key-department.component.html',
  styleUrls: ['./key-department.component.css']
})
export class KeyDepartmentComponent implements OnInit {
  specialites : any = [
    {title : "Urgences",image:"assets/images/urgences.jpg",description : " Accident and Emergency Unit"},
    {title : "Cardiology",image:"assets/images/card3.jpg",description : "the study and treatment of medical conditions of the heart"},
    {title : "Nephrologie",image:"assets/images/neph.jpg",description : "the area of science and medicine that is concerned with the kidneys"},
    {title : "Gynecologie",image:"assets/images/gyne.jpg",description : "La gynécologie est le domaine médical qui étudie et traite les différentes pathologies de l'appareil génital de la femme et les troubles hormonaux féminins"},
    {title : "Gastroenterology",image:"assets/images/gast.jpg",description : "Gastroenterology is the most prominent journal in the field of gastrointestinal disease. As the official journal of the AGA Institute, Gastroenterology"},
    {title : "Endocrinology",image:"assets/images/endr.png",description : "Endocrinology is the study of hormones and endocrine glands and organs"},
    {title : "Intensive carey",image:"assets/images/rean.jpg",description : "La réanimation est un service spécialisé où sont hospitalisés les patients les plus grave"},
    {title : "All radiology",image:"assets/images/rad2.jpg",description : "All the up-to-date radiology expertise on one platform, to assist you in the correct interpretation and diagnosis of imaging studies."},
    {title : "Pediatrie",image:"assets/images/ped.avif",description : "La pédiatrie est une spécialité médicale qui se consacre à l'enfant, depuis la vie intra-utérine (en lien avec l'obstétrique ) jusqu'à la fin de l'adolescence."},

  ]

  constructor() { }

  ngOnInit() {
  }

}
