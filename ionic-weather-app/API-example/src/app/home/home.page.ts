import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public weather: any;
  public location: any;
  private coords:any;

  constructor(
    public weatherService:WeatherService,
    ) {
      this.getCurrentPosition()
    }

  showLoader():void{
    //turn loader on and off...
    this.weatherService.loading = !this.weatherService.loading;
  }

  async getCurrentPosition(){
    const coordinates = await Geolocation.getCurrentPosition();
    this.coords = coordinates;
    console.log('Current', coordinates);    
  }

  getLocation():Object{
    console.log(this.coords);
    this.weather = this.weatherService.getWeather(this.location, this.coords);

    return this.weather;
  }
}
