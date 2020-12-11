import { Component} from '@angular/core';
import { MealService } from '../services/meal-service.service';

@Component({
  selector: 'app-search-meal',
  templateUrl: './search-meal.page.html',
  styleUrls: ['./search-meal.page.scss'],
})
export class SearchMealPage {
  public meal:any;
  public mealSearch:any;

  constructor(
    public mealService:MealService,
  ) { }


  searchMeal():void{
    this.meal = this.mealService.searchMeal(this.mealSearch);
    console.log(this.meal);
    
  }
}
