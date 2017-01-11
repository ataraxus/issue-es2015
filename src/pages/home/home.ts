import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { M } from '../../models/models';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    console.log(M.mm);
  }

}
