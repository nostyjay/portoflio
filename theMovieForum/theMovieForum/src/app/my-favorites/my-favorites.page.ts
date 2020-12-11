import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonList } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-my-favorites',
  templateUrl: './my-favorites.page.html',
  styleUrls: ['./my-favorites.page.scss'],
})
export class MyFavoritesPage implements OnInit {

  @ViewChild(IonList, {static:false}) slidingList:IonList;

  public movie:any;
  constructor(
    private alertCtrl:AlertController,
    public storage:Storage,
  ) { }

  ngOnInit() {
    this.loadMovie();
  }


  loadMovie(){
      let movies = []
      this.storage.forEach((value, key)=>{
        if(movies[value] != key){
          movies.push(value)
          console.log(key[value]);
        }
     })     
     this.movie = movies;
    }

  removeMovie(){
    const target = event.target as HTMLTextAreaElement;
    this.storage.forEach((value,key)=>{
      if(value.imdbID == target.id){
        this.alertCtrl.create({
          header: "removed",
          message: `${value.Title} has been removed from your favorites. Refresh the page to update your list`,
          buttons: [
            {
              text: 'Okay',
            }
          ]
        }).then((prompt) =>{
          prompt.present();
        })
        this.storage.remove(key)
      }
    })
  }
}
