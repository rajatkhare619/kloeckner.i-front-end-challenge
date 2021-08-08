import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-location-input',
  templateUrl: './location-input.component.html',
  styleUrls: ['./location-input.component.scss'],
})
export class LocationInputComponent implements OnInit {
  @Input() countries!: { [key: string]: string };
  @Output() onLocationChange = new EventEmitter<{
    city: string;
    country: string;
  }>();
  city!: string;
  country = 'select';

  constructor() {}

  ngOnInit(): void {}

  getWeatherData() {
    this.onLocationChange.emit({ city: this.city, country: this.country });
  }
}
