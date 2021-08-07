import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-weather',
  templateUrl: './display-weather.component.html',
  styleUrls: ['./display-weather.component.scss'],
})
export class DisplayWeatherComponent implements OnInit {
  @Input() weatherInfo: any;
  constructor() {}

  ngOnInit(): void {}
}
