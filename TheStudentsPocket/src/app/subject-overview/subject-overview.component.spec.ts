import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectOverviewComponent } from './subject-overview.component';

describe('SubjectOverviewComponent', () => {
  let component: SubjectOverviewComponent;
  let fixture: ComponentFixture<SubjectOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
