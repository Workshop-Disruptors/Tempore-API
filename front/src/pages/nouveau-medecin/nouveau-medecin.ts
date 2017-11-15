import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { MedecinPage } from '../medecin/medecin';

@Component({
  selector: 'page-nouveau-medecin',
  templateUrl: 'nouveau-medecin.html'
})
export class NouveauMedecinPage {

  constructor(public navCtrl: NavController) {
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToMedecin(params){
    if (!params) params = {};
    this.navCtrl.push(MedecinPage);
  }
}
