import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGradePage } from './edit-grade.page';

describe('EditGradePage', () => {
  let component: EditGradePage;
  let fixture: ComponentFixture<EditGradePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGradePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGradePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
