import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { User } from '../../models/models';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    console.log(User.UserTypeEnum);
  }

}
