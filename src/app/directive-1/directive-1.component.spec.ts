import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Directive1Component } from './directive-1.component';

describe('Directive1Component', () => {
  let component: Directive1Component;
  let fixture: ComponentFixture<Directive1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Directive1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Directive1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
