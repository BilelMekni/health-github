import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {

  @ Input() Inputstructure : any

  constructor() { }

  ngOnInit() {
  }

}
