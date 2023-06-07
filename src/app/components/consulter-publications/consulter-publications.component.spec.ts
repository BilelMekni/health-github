import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterPublicationsComponent } from './consulter-publications.component';

describe('ConsulterPublicationsComponent', () => {
  let component: ConsulterPublicationsComponent;
  let fixture: ComponentFixture<ConsulterPublicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterPublicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
