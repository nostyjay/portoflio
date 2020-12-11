import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MealService {
  public meal: any;
  private randomURL = 'https://www.themealdb.com/api/json/v1/1/random.php';
  private searchURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  public listURL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
  constructor(private http:HttpClient) { }

  getRandomMeal():Object{   

    this.http
    .get(this.randomURL)
    .subscribe((res)=>{
      this.meal = res;
    })
    return this.meal;
  }

  searchMeal(mealSearch):Object{

    let FullSearchURL;

    if(mealSearch != "" && mealSearch != null){
       FullSearchURL = `${this.searchURL}${mealSearch}`;
    }
    
    this.http
    .get(FullSearchURL)
    .subscribe(
      (res)=>{
      this.meal = res;
    })
    return this.meal;
  }

  listMeal():Object{
    this.http
    .get(this.listURL)
    .subscribe(
      (res)=>{
      this.meal = res;
    })
    console.log(this.meal);
    
    return this.meal;
  }
}
