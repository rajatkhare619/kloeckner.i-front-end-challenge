import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  getCountryList(): Observable<{ [key: string]: string }> {
    return this.http.get<{ [key: string]: string }>('assets/countries.json');
  }
}
