import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KPIMetricsComponent } from './kpimetrics.component';

describe('KPIMetricsComponent', () => {
  let component: KPIMetricsComponent;
  let fixture: ComponentFixture<KPIMetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KPIMetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KPIMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
