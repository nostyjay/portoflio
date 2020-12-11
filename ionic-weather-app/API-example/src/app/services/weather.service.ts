import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Geolocation } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  public weather: any;
  public loading: boolean =false;
  private apiKey:String="df47d16fec2341aa86b204037201410";
  private baseURL = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=`;
  private forcastBaseURL = `http://api.weatherapi.com/v1/forcast.json?key=${this.apiKey}&q=`;
  private forcastEndURL = "&days=5";


  constructor(private http:HttpClient) { }

  load():void{

  }

  getWeather(location, coords):Object{
    console.log("weather for: " + coords.coords.latitude + coords.coords.longitude);
    let fullURL;
    if(location != "" && location != null){
      fullURL = this.baseURL + location;
      console.log(fullURL);
    } 
    if(coords != null && location == '' || location == null){
      fullURL = this.baseURL + coords.coords.latitude + ',' + coords.coords.longitude;
      console.log(fullURL);
    }
    
    
    this.http
    .get(fullURL)
    .subscribe(
      (res:any) => {
        console.log(res);
        this.weather = res;
      }
    )

    return this.weather;
  }
}
