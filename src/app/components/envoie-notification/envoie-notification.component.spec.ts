import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoieNotificationComponent } from './envoie-notification.component';

describe('EnvoieNotificationComponent', () => {
  let component: EnvoieNotificationComponent;
  let fixture: ComponentFixture<EnvoieNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvoieNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoieNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
