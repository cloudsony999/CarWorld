import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarworldcheckoutComponent } from './carworldcheckout.component';

describe('CarworldcheckoutComponent', () => {
  let component: CarworldcheckoutComponent;
  let fixture: ComponentFixture<CarworldcheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarworldcheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarworldcheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
