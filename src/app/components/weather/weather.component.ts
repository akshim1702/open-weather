import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UtilsService } from 'src/app/services/utils.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  public loading = true;

  public localDate: any = new Date();

  weatherDetails = {
    Country: '',
    'Location Name': '',
    Longitude: '',
    Latitude: '',
    'Weather Condition': '',
    'Detailed Description': '',
    Temperature: '',
    'Feels Like Temperature': '',
    'Minimum Temperature': '',
    'Maximum Temperature': '',
    'Atmospheric Pressure': '',
    Humidity: '',
    Visibility: '',
    'Wind Speed': '',
    'Wind Direction': '',
    Cloudiness: '',
    'Sunrise Time': '',
    'Sunset Time': '',
    'Timezone Offset': '',
  };

  JsonData: any;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    public utils: UtilsService,
    private datePipe: DatePipe
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const lat = params['lat'];
      const lon = params['lon'];
      this.getWeather(lat, lon);
    });
  }

  getWeather(lat: number, lon: number) {
    this.loading = true;
    this.api.getWeatherDetails({ lat, lon }).subscribe((data) => {
      this.JsonData = data;
      this.localDate = this.utils.convertToTimezone(
        this.utils.convertToGMT(this.JsonData.dt),
        this.JsonData.timezone
      );
      this.weatherDetails = {
        Country: data.sys.country,
        'Location Name': data.name,
        Longitude: data.coord.lon,
        Latitude: data.coord.lat,
        'Weather Condition': data.weather[0].main,
        'Detailed Description': data.weather[0].description,
        Temperature: this.utils.kelvinToCelsius(data.main.temp) + ' °C',
        'Feels Like Temperature':
          this.utils.kelvinToCelsius(data.main.feels_like) + ' °C',
        'Minimum Temperature':
          this.utils.kelvinToCelsius(data.main.temp_min) + ' °C',
        'Maximum Temperature':
          this.utils.kelvinToCelsius(data.main.temp_max) + ' °C',
        'Atmospheric Pressure': data.main.pressure + ' hPa',
        Humidity: data.main.humidity + ' %',
        Visibility: data.visibility / 1000 + ' Km',
        'Wind Speed': this.utils.convertToKmPerHour(data.wind.speed) + ' km/h',
        'Wind Direction': data.wind.deg + '°',
        Cloudiness: data.clouds.all + '°',
        'Sunrise Time': this.utils.convertToTimezone(
          this.utils.convertToGMT(data.sys.sunrise),
          this.JsonData.timezone
        ),
        'Sunset Time': this.utils.convertToTimezone(
          this.utils.convertToGMT(data.sys.sunset),
          this.JsonData.timezone
        ),
        'Timezone Offset': this.utils.timezoneOffsetToUTC(data.timezone),
      };
      this.loading = false;
    });
  }
}
