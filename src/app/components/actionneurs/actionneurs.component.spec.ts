import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionneursComponent } from './actionneurs.component';

describe('ActionneursComponent', () => {
  let component: ActionneursComponent;
  let fixture: ComponentFixture<ActionneursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionneursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionneursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
