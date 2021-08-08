import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayWeatherComponent } from './display-weather/display-weather.component';
import { LocationInputComponent } from './location-input/location-input.component';
import { FormsModule } from '@angular/forms';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

@NgModule({
  declarations: [AppComponent, DisplayWeatherComponent, LocationInputComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, GooglePlaceModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
