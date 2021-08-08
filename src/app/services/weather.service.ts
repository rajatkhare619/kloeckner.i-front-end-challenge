import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  API_KEY = '38f16ad0f3e59501e3a086fa144db19b';
  constructor(private http: HttpClient) {}

  getCityWeatherData(city: string, country: string): Observable<WeatherData> {
    return this.http
      .get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${this.API_KEY}`
      )
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  getRandomWeatherData(): Observable<WeatherData> {
    const lon = +(Math.random() * 180).toFixed(3);
    const lat = +(Math.random() * 90).toFixed(3);

    return this.http
      .get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${this.API_KEY}`
      )
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  getWeatherDataWithCoords(lat: number, lon: number) {
    return this.http
      .get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${this.API_KEY}`
      )
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }
}

export interface WeatherData {
  name: string;
  sys: { country: string };
  coord: { lat: number; lon: number };
  main: { temp_min: number; temp_max: number; temp: number; humidity: number };
}
