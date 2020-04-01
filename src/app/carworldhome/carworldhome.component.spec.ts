import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarworldhomeComponent } from './carworldhome.component';

describe('CarworldhomeComponent', () => {
  let component: CarworldhomeComponent;
  let fixture: ComponentFixture<CarworldhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarworldhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarworldhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
