import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { Observable } from 'rxjs';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-location-input',
  templateUrl: './location-input.component.html',
  styleUrls: ['./location-input.component.scss'],
})
export class LocationInputComponent implements OnInit {
  @Input() countries!: { [key: string]: string };
  @Output() onDropdownLocationChange = new EventEmitter<{
    city: string;
    country: string;
  }>();
  @Output() onGoogleLocationChange = new EventEmitter<{
    lat: number;
    lon: number;
  }>();
  city!: string;
  country = 'select';

  constructor() {}

  ngOnInit(): void {}

  getWeatherData() {
    this.onDropdownLocationChange.emit({
      city: this.city,
      country: this.country,
    });
  }

  onGoogleSearch(address: Address) {
    this.onGoogleLocationChange.emit({
      lat: address.geometry.location.lat(),
      lon: address.geometry.location.lng(),
    });
    console.log(address.geometry.location.lat());
  }
}
