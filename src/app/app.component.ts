
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
export { B } from '../models/B'
export { C } from '../models/C'
export { D } from '../models/D'
export { E } from '../models/E'
export { F } from '../models/F'
export { G } from '../models/G'
export { H } from '../models/H'
export { I } from '../models/I'
export { J } from '../models/J'
export { K } from '../models/K'
export { L } from '../models/L'
export { M } from '../models/M'


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
