import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyDepartmentComponent } from './key-department.component';

describe('KeyDepartmentComponent', () => {
  let component: KeyDepartmentComponent;
  let fixture: ComponentFixture<KeyDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
