import { Component, OnInit } from '@angular/core';

import {Tache} from '../models/tache-format';
import {RecupTachesService} from '../services/recup-tache.service';

@Component({
  selector: 'app-afficher',
  templateUrl: './afficher.component.html',
  styleUrls: ['./afficher.component.css']
})
export class AfficherComponent implements OnInit {

  constructor(private recuptacheservice: RecupTachesService ) { }
  mesTaches: Tache[];
  ngOnInit(): void {
    this.recuptacheservice.getContacts().subscribe(
      taches => {
        console.log(taches);
        this.mesTaches = taches;
      }
    );
  }

}
