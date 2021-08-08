import { Component, OnInit } from '@angular/core';
import { WeatherData, WeatherService } from './services/weather.service';
import { Observable } from 'rxjs';
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  weatherData$!: Observable<WeatherData>;
  countries$!: Observable<{ [key: string]: string }>;

  constructor(
    private weatherService: WeatherService,
    private countryService: CountriesService
  ) {}

  ngOnInit() {
    this.getRandomData();
    this.countries$ = this.countryService.getCountryList();
  }

  getLocationData(location: { city: string; country: string }) {
    this.weatherData$ = this.weatherService.getCityWeatherData(
      location.city,
      location.country
    );
  }

  getRandomData() {
    this.weatherData$ = this.weatherService.getRandomWeatherData();
  }

  getLocationByGoogle(coords: { lat: number; lon: number }) {
    this.weatherData$ = this.weatherService.getWeatherDataWithCoords(
      coords.lat,
      coords.lon
    );
  }
}
