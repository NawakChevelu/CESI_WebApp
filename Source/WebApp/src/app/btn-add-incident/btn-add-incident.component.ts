import { Component, OnInit } from '@angular/core';
import { IncidentsComponent } from '../incidents/incidents.component';
import { NgForm } from '@angular/forms';
//import { Incident } from '../incident';
import { INCIDENTS } from '../mock-incidents';
//import { format } from 'path';

@Component({
  selector: 'app-btn-add-incident',
  templateUrl: './btn-add-incident.component.html',
  styleUrls: ['./btn-add-incident.component.css']
})
export class BtnAddIncidentComponent implements OnInit {


  public show:boolean = false;
  public btn_incident = "";
  addIncident(){
    this.show = !this.show;
  }

  onSubmit(form : NgForm){
    console.log(form.value);
  }

  ngOnInit(): void {
  }

}

