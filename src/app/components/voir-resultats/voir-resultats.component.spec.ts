import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirResultatsComponent } from './voir-resultats.component';

describe('VoirResultatsComponent', () => {
  let component: VoirResultatsComponent;
  let fixture: ComponentFixture<VoirResultatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirResultatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirResultatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
