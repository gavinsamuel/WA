import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public weatherData: any;
  public location: string = 'Chennai';

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeatherData(this.location).subscribe(
      (data) => {
        this.weatherData = data;
        console.log('Weather data:', this.weatherData);  
      },
      (error) => {
        console.error('Error fetching weather data:', error);
      }
    );
  }
  
}
 