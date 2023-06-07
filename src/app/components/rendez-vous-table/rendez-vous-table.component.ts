import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { RendezVousService } from 'src/app/services/rendez-vous.service';

@Component({
  selector: 'app-rendez-vous-table',
  templateUrl: './rendez-vous-table.component.html',
  styleUrls: ['./rendez-vous-table.component.css']
})
export class RendezVousTableComponent implements OnInit {
rendez:any=[];
  constructor(private rendezvousService : RendezVousService) { }

  ngOnInit() {
    this.rendezvousService.getAllRendezVous().subscribe(
      (response)=>{
        this.rendez = response.rendez;
      }
    )
  }

}
