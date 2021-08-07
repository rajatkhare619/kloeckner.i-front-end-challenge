import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  API_KEY = '38f16ad0f3e59501e3a086fa144db19b';
  constructor(private http: HttpClient) {}

  getCityWeatherData() {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${'noida'}&appid=${
        this.API_KEY
      }`
    );
  }

  getRandomWeatherData() {
    const lon = +(Math.random() * 180).toFixed(3);
    const lat = +(Math.random() * 90).toFixed(3);

    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.API_KEY}`
    );
  }
}
