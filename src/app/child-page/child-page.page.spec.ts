import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPagePage } from './child-page.page';

describe('ChildPagePage', () => {
  let component: ChildPagePage;
  let fixture: ComponentFixture<ChildPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
