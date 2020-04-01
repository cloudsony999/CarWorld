import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarworldorderComponent } from './carworldorder.component';

describe('CarworldorderComponent', () => {
  let component: CarworldorderComponent;
  let fixture: ComponentFixture<CarworldorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarworldorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarworldorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
