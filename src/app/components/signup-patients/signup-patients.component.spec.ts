import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPatientsComponent } from './signup-patients.component';

describe('SignupPatientsComponent', () => {
  let component: SignupPatientsComponent;
  let fixture: ComponentFixture<SignupPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
