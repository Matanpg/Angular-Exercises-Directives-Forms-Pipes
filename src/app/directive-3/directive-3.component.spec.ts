import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Directive3Component } from './directive-3.component';

describe('Directive3Component', () => {
  let component: Directive3Component;
  let fixture: ComponentFixture<Directive3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Directive3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Directive3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
