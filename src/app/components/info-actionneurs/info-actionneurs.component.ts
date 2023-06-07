import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-actionneurs',
  templateUrl: './info-actionneurs.component.html',
  styleUrls: ['./info-actionneurs.component.css']
})
export class InfoActionneursComponent implements OnInit {
  @Input() Inputinfo:any;

  constructor() { }

  ngOnInit() {
  }

}
