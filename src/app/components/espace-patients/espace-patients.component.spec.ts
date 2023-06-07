import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacePatientsComponent } from './espace-patients.component';

describe('EspacePatientsComponent', () => {
  let component: EspacePatientsComponent;
  let fixture: ComponentFixture<EspacePatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspacePatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacePatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
