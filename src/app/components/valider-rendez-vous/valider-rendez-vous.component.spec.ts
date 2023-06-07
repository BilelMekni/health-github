import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderRendezVousComponent } from './valider-rendez-vous.component';

describe('ValiderRendezVousComponent', () => {
  let component: ValiderRendezVousComponent;
  let fixture: ComponentFixture<ValiderRendezVousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValiderRendezVousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValiderRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
