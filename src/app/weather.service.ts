import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey: string = environment.weatherApiKey; 
  private apiUrl: string = 'https://api.weatherapi.com/v1';

  constructor(private http: HttpClient) {}

  getWeatherData(location: string): Observable<any> {
    const url = `${this.apiUrl}/current.json?key=${this.apiKey}&q=${location}`;
    return this.http.get(url);
  }
  
}
