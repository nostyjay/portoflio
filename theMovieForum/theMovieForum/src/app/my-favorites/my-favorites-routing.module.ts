import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyFavoritesPage } from './my-favorites.page';

const routes: Routes = [
  {
    path: '',
    component: MyFavoritesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyFavoritesPageRoutingModule {}
