import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModuleinfoPageComponent } from './create-moduleinfo-page.component';

describe('CreateModuleinfoPageComponent', () => {
  let component: CreateModuleinfoPageComponent;
  let fixture: ComponentFixture<CreateModuleinfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateModuleinfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateModuleinfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
