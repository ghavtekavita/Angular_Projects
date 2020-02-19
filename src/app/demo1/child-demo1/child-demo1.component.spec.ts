import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDemo1Component } from './child-demo1.component';

describe('ChildDemo1Component', () => {
  let component: ChildDemo1Component;
  let fixture: ComponentFixture<ChildDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
