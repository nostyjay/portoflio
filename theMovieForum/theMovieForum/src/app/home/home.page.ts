import { Component} from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

var movieCount = 0;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  public showMovie:any;
  public movie:any;
  public movieId:any;
  public movieSearch:null;
  public id:null;
  private searchURL = 'https://www.omdbapi.com/?apikey=cfac4aa8&s=';
  private getFirstMovieUrl = 'https://www.omdbapi.com/?apikey=cfac4aa8&s=blade'
  constructor(
    private http:HttpClient,
    private alertCtrl:AlertController,
    public storage:Storage,
  ) { 
  }

  getFirstMovies():Object{
    this.http
      .get(this.getFirstMovieUrl)
      .subscribe(
        (res:Observable<any>)=>{
          this.movie = Object.assign({}, res);
      })
      return Object.assign({}, this.movie)
  }

  showSearchMovie(){

    let FullSearchURL

    if(this.movieSearch != "" && this.movieSearch != null){
       FullSearchURL = `${this.searchURL}${this.movieSearch}`;
    }
    this.http
      .get(FullSearchURL)
      .subscribe(
        (res:Observable<any>)=>{
          this.movie = Object.assign({},res);
          console.log(this.movie);
      })
    return this.movie;
  }

  addMovie(){
    const target = event.target as HTMLTextAreaElement;
    for(let movie of this.movie.Search){
    if(movie.imdbID == target.id){
      console.log(movie.imdbID);
      console.log(target.id);
    this.alertCtrl.create({
      header: "Woohoo!",
      message: `${movie.Title} has been added to your favorites`,
      buttons: [
        {
          text: 'Okay',
        }
      ]
    }).then((prompt) =>{
      prompt.present();
    })
    console.log(movie);
    
    this.storage.set(`${movieCount}`, movie)
     movieCount++;
  }
  }
  }

}
