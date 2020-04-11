import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarresultsComponent } from './carresults.component';

describe('CarresultsComponent', () => {
  let component: CarresultsComponent;
  let fixture: ComponentFixture<CarresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
