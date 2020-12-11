import { Component, Injectable} from '@angular/core';
import { MealService } from '../services/meal-service.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-meal-list-letters',
  templateUrl: './meal-list-letters.page.html',
  styleUrls: ['./meal-list-letters.page.scss'],
})
export class MealListLettersPage {
  public alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  public meal:any;
  public FullListURL:any;
  constructor(public mealService:MealService, private http:HttpClient) { 
  
  }

  createListLink(value):void{
    this.FullListURL = this.mealService.listURL + value;
    console.log(this.FullListURL);

    this.http
    .get(this.FullListURL)
    .subscribe(
      (res)=>{
      this.meal = res;
      console.log(this.meal);
    })
  }





}
