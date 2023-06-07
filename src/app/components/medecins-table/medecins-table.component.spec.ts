import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinsTableComponent } from './medecins-table.component';

describe('MedecinsTableComponent', () => {
  let component: MedecinsTableComponent;
  let fixture: ComponentFixture<MedecinsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedecinsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
