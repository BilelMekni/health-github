import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationPrincipaleComponent } from './information-principale.component';

describe('InformationPrincipaleComponent', () => {
  let component: InformationPrincipaleComponent;
  let fixture: ComponentFixture<InformationPrincipaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationPrincipaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationPrincipaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
