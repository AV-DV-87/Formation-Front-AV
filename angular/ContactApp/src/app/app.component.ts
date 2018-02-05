import { Component } from '@angular/core';
import { Contact } from './shared/models/Contact';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gestion de mes contacts';
  // -- contact choisi par mon utilisateur
  contactActif: Contact;

  /* spécifier que unContact est un tableau contenant des objets contacts*/
    unContact: Contact = {
    id: 1,
    name: 'Hugo LIEGEARD',
    username: 'hugoliegeard',
    email: 'wf3@hl-media.fr',
  };

  mesContacts: Contact[] = [
    {
      id: 1,
      name: 'Hugo LIEGEARD',
      username: 'hugoliegeard',
      email: 'wf3@hl-media.fr'
    },
    {
      id: 2,
      name: 'Arnaud VALLETTE',
      username: 'arnaudvallette',
      email: 'a.vallette@hl-media.fr'
    },
    {
      id: 3,
      name: 'Jonathan CHEMLA',
      username: 'jonathanchemla',
      email: 'j.chemla@hl-media.fr'
    }
  ];

  /**
   * Ma fonction choisir contact, prend un contact
   * en paramètre et le transmet a la variable contactActif
   * @param contactCliqueParMonUtilisateur
   */
  choisirContact(contactCliqueParMonUtilisateur) {
    this.contactActif = contactCliqueParMonUtilisateur;
    console.log(this.contactActif);
  }
}
