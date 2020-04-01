import { Component, OnInit } from '@angular/core';
import { Incident } from '../incident';
import { INCIDENTS } from '../mock-incidents';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent implements OnInit {

  incidents = INCIDENTS;

  constructor() { }

  ngOnInit(): void {
  }

}

