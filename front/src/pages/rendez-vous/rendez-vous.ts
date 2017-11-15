import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NouveauMedecinPage } from '../nouveau-medecin/nouveau-medecin';
import { LoginPage } from '../login/login';
import { MedecinPage } from '../medecin/medecin';

@Component({
  selector: 'page-rendez-vous',
  templateUrl: 'rendez-vous.html'
})
export class RendezVousPage {

  constructor(public navCtrl: NavController) {
  }
  goToNouveauMedecin(params){
    if (!params) params = {};
    this.navCtrl.push(NouveauMedecinPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToMedecin(params){
    if (!params) params = {};
    this.navCtrl.push(MedecinPage);
  }
}
