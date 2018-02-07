import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RecupTacheService, RecupTachesService} from './services/recup-tache.service';
import { AfficherComponent } from './afficher/afficher.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddTacheComponent } from './add-tache/add-tache.component';
import { TaskFilterPipe } from './pipes/task-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AfficherComponent,
    AddTacheComponent,
    TaskFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RecupTachesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
