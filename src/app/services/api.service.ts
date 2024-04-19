import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string = 'https://api.openweathermap.org/';
  private apiKey: string = '2e24cb6e1a47ce6c79c7689f3a754bf6';

  constructor(private http: HttpClient) {}

  getCordinatesData(state: string, country: string): Observable<any> {
    const url = `${this.baseUrl}geo/1.0/direct?q=${state},${country}&appid=${this.apiKey}`;
    return this.http.get(url);
  }

  getWeatherDetails({
    lat,
    lon,
  }: {
    lat: number;
    lon: number;
  }): Observable<any> {
    const url = `${this.baseUrl}data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}
