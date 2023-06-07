import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierMedecinsComponent } from './modifier-medecins.component';

describe('ModifierMedecinsComponent', () => {
  let component: ModifierMedecinsComponent;
  let fixture: ComponentFixture<ModifierMedecinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierMedecinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierMedecinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
