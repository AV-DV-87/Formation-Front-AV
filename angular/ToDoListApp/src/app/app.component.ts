import { Component, OnInit } from '@angular/core';
import {Tache} from './models/tache-format';
import {RecupTacheService} from './services/recup-tache.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(private recuptacheservice: RecupTacheService) {}
  taches: Tache[] = [];

  newTache (newTacheEvent) {
    this.taches.push(newTacheEvent.Tache);
  }
}

