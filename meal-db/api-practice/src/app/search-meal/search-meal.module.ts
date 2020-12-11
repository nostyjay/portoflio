import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchMealPageRoutingModule } from './search-meal-routing.module';

import { SearchMealPage } from './search-meal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchMealPageRoutingModule
  ],
  declarations: [SearchMealPage]
})
export class SearchMealPageModule {}
