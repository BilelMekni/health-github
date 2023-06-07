import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPatientsComponent } from './modifier-patients.component';

describe('ModifierPatientsComponent', () => {
  let component: ModifierPatientsComponent;
  let fixture: ComponentFixture<ModifierPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
