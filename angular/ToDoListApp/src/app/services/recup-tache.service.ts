import { Injectable } from '@angular/core';

@Injectable()
export class RecupTachesService {

  constructor() { }
// -- Récupérer la liste des tâches

  getTaches() {
    return JSON.parse(localStorage.getItem('tasks'));

  }

  // -- Sauvegarder les tâches
  save(taches) {
    localStorage.setItem('tasks', JSON.stringify(taches));
  }
}
