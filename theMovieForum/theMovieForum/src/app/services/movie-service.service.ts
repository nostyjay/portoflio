import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class MovieServiceService{
  public movie:Observable<any>;
  public movieSearch: any;
  public favorites:[];
  public loaded: boolean = false;
  private getMovieUrl = 'https://the-one-api.dev/v2/'
  private getMovieImgUrl = 'http://img.omdbapi.com/?apikey=cfac4aa8&'
  
 
  constructor(private storage:Storage) {}

}
