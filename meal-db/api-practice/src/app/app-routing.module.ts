
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'search-meal',
    loadChildren: () => import('./search-meal/search-meal.module').then( m => m.SearchMealPageModule)
  },
  {
    path: 'meal-list-letters',
    loadChildren: () => import('./meal-list-letters/meal-list-letters.module').then( m => m.MealListLettersPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
