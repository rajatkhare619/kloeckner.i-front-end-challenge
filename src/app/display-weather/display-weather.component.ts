import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { WeatherData } from '../services/weather.service';

@Component({
  selector: 'app-display-weather',
  templateUrl: './display-weather.component.html',
  styleUrls: ['./display-weather.component.scss'],
})
export class DisplayWeatherComponent implements OnInit {
  @Input() weatherInfo?: WeatherData;
  @Output() getRandomWeather = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  getRandomWeatherData() {
    this.getRandomWeather.emit();
  }
}
