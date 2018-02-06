import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from '../shared/models/contact';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  @Output () unContactEstCree = new EventEmitter();
  nouveauContact: Contact = new Contact();

  constructor() { }

  ngOnInit() {
  }
/* -- fonction qui sera appelée après le submit du formulaire
un évent est écouté sur l'appli et il récupérera les données du nouveau
 */
  submitContact() {
    this.unContactEstCree.emit({ contact: this.nouveauContact});
  }
}
