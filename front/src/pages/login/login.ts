import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MedecinPage } from '../medecin/medecin';
import { NouveauComptePage } from '../nouveau-compte/nouveau-compte';

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
  goToNouveauCompte(params){
    if (!params) params = {};
    this.navCtrl.push(NouveauComptePage);
  }
}
