import { TestBed } from '@angular/core/testing';

import { WeatherData, WeatherService } from './weather.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return weather data', () => {
    const testData = {
      name: 'paris',
      sys: { country: 'france' },
      coord: { lat: 23, lon: 87 },
      main: { temp_min: -97, temp_max: 44, temp: 33, humidity: 78 },
    };

    service
      .getCityWeatherData(testData.name, testData.sys.country)
      .subscribe((data) => expect(data).toEqual(testData));

    const req = httpTestingController.expectOne(
      'https://api.openweathermap.org/data/2.5/weather?q=paris,france&units=metric&appid=38f16ad0f3e59501e3a086fa144db19b'
    );

    expect(req.request.method).toEqual('GET');

    req.flush(testData);

    httpTestingController.verify();
  });
});
