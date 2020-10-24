import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableReactiveformComponent } from './table-reactiveform.component';

describe('TableReactiveformComponent', () => {
  let component: TableReactiveformComponent;
  let fixture: ComponentFixture<TableReactiveformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableReactiveformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableReactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
