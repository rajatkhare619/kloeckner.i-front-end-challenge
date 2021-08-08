import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWeatherComponent } from './display-weather.component';

describe('DisplayWeatherComponent', () => {
  let component: DisplayWeatherComponent;
  let fixture: ComponentFixture<DisplayWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayWeatherComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the event for getting random data', () => {
    const spy = spyOn(component.getRandomWeather, 'emit');
    component.getRandomWeatherData();
    expect(spy).toHaveBeenCalled();
  });
});
