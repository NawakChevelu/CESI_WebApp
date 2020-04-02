import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAddIncidentComponent } from './btn-add-incident.component';

describe('BtnAddIncidentComponent', () => {
  let component: BtnAddIncidentComponent;
  let fixture: ComponentFixture<BtnAddIncidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnAddIncidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnAddIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
