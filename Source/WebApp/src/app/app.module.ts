import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { IncidentDetailComponent } from './incident-detail/incident-detail.component';
import { BtnAddIncidentComponent } from './btn-add-incident/btn-add-incident.component';

@NgModule({
  declarations: [
    AppComponent,
    IncidentsComponent,
    IncidentDetailComponent,
    BtnAddIncidentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
