import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchMealPage } from './search-meal.page';

const routes: Routes = [
  {
    path: '',
    component: SearchMealPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchMealPageRoutingModule {}
