import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTapComponent } from './main-tap.component';

describe('MainTapComponent', () => {
  let component: MainTapComponent;
  let fixture: ComponentFixture<MainTapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
