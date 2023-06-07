import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent implements OnInit {
  @Input() Inputspecialite:any;

  constructor() { }

  ngOnInit() {
  }

}
