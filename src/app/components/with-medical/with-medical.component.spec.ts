import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithMedicalComponent } from './with-medical.component';

describe('WithMedicalComponent', () => {
  let component: WithMedicalComponent;
  let fixture: ComponentFixture<WithMedicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithMedicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
