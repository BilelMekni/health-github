import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
 inscription(){
  this.router.navigate(["signupPatients"]);

 }
 inscriptionTwo(){
  this.router.navigate(["signupPatients"])
 }
}
