import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MealListLettersPageRoutingModule } from './meal-list-letters-routing.module';

import { MealListLettersPage } from './meal-list-letters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealListLettersPageRoutingModule
  ],
  declarations: [MealListLettersPage]
})
export class MealListLettersPageModule {}
