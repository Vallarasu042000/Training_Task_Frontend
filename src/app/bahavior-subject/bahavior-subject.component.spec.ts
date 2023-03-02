import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BahaviorSubjectComponent } from './bahavior-subject.component';

describe('BahaviorSubjectComponent', () => {
  let component: BahaviorSubjectComponent;
  let fixture: ComponentFixture<BahaviorSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BahaviorSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BahaviorSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
