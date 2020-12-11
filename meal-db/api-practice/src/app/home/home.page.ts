import { Component } from '@angular/core';
import { MealService } from '../services/meal-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public meal: any;
  public ingredients: [];

  constructor(
    public mealService:MealService,
  ) {
    this.getRandomMeal();
  }

  getRandomMeal():Object{
   this.meal = this.mealService.getRandomMeal();

   return this.meal;
  }

}
