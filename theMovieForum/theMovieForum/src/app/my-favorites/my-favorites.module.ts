import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyFavoritesPageRoutingModule } from './my-favorites-routing.module';

import { MyFavoritesPage } from './my-favorites.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyFavoritesPageRoutingModule
  ],
  declarations: [MyFavoritesPage]
})
export class MyFavoritesPageModule {}
