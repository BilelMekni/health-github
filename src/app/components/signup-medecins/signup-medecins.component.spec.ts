import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupMedecinsComponent } from './signup-medecins.component';

describe('SignupMedecinsComponent', () => {
  let component: SignupMedecinsComponent;
  let fixture: ComponentFixture<SignupMedecinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupMedecinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupMedecinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
