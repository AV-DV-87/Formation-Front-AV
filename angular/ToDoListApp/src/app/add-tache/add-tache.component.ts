import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Tache} from '../models/tache-format';


@Component({
  selector: 'app-add-tache',
  templateUrl: './add-tache.component.html',
  styleUrls: ['./add-tache.component.css']
})
export class AddTacheComponent implements OnInit {
  @Output () newTacheEvent = new EventEmitter();
  tache: Tache = new Tache();
  active = true;
  constructor() { }

  ngOnInit() {
  }
  addTache() {
    this.newTacheEvent.emit({tache: this.tache});
    this.tache = new Tache();
    this.active = false;
    setTimeout( () => this.active = true, 0);
  }
}
