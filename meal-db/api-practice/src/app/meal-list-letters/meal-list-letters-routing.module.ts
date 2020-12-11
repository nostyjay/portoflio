import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MealListLettersPage } from './meal-list-letters.page';

const routes: Routes = [
  {
    path: '',
    component: MealListLettersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealListLettersPageRoutingModule {}
