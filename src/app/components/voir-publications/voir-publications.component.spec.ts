import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirPublicationsComponent } from './voir-publications.component';

describe('VoirPublicationsComponent', () => {
  let component: VoirPublicationsComponent;
  let fixture: ComponentFixture<VoirPublicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirPublicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
