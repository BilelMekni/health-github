import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierRendezVousComponent } from './modifier-rendez-vous.component';

describe('ModifierRendezVousComponent', () => {
  let component: ModifierRendezVousComponent;
  let fixture: ComponentFixture<ModifierRendezVousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierRendezVousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
