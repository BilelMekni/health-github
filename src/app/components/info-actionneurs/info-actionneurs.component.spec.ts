import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoActionneursComponent } from './info-actionneurs.component';

describe('InfoActionneursComponent', () => {
  let component: InfoActionneursComponent;
  let fixture: ComponentFixture<InfoActionneursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoActionneursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoActionneursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
