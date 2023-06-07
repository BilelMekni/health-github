import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatTableComponent } from './resultat-table.component';

describe('ResultatTableComponent', () => {
  let component: ResultatTableComponent;
  let fixture: ComponentFixture<ResultatTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultatTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
