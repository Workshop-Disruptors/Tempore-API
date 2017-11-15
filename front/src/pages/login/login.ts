import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MedecinPage } from '../medecin/medecin';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToMedecin(params){
    if (!params) params = {};
    this.navCtrl.push(MedecinPage);
  }
}
