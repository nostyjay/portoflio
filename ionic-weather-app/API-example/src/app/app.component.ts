import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

import { Platform } from '@ionic/angular';

const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor() {
    SplashScreen.hide().catch(err =>{
      console.warn(err);
    });

    StatusBar.hide().catch(err =>{
      console.warn(err);
    });
  }
}
