import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarworldsummaryComponent } from './carworldsummary.component';

describe('CarworldsummaryComponent', () => {
  let component: CarworldsummaryComponent;
  let fixture: ComponentFixture<CarworldsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarworldsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarworldsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
