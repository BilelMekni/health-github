import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactProblemComponent } from './contact-problem.component';

describe('ContactProblemComponent', () => {
  let component: ContactProblemComponent;
  let fixture: ComponentFixture<ContactProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
