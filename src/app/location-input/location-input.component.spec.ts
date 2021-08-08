import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationInputComponent } from './location-input.component';
import {
  GooglePlaceDirective,
  GooglePlaceModule,
} from 'ngx-google-places-autocomplete';

(window as any)['google'] = {
  maps: {
    OverlayView: function () {},
    Marker: function () {},
    InfoWindow: function () {},
    LatLng: function (lat: any, lng: any) {
      return [lat, lng];
    },
    Map: function (obj: any) {},
    MapTypeId: { ROADMAP: true },
    places: {
      Autocomplete: function () {},
      AutocompleteService: function () {},
      PlacesService: function (obj: any) {
        return {
          PlacesServiceStatus: {
            OK: true,
          },
          textSearch: function (query: any) {
            return [];
          },
          nearbySearch: function (query: any) {
            return [];
          },
        };
      },
    },
  },
};
xdescribe('LocationInputComponent', () => {
  let component: LocationInputComponent;
  let fixture: ComponentFixture<LocationInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GooglePlaceModule],
      declarations: [LocationInputComponent, GooglePlaceDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
