import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MedecinPage } from '../medecin/medecin';
import { RendezVousPage } from '../rendez-vous/rendez-vous';


@Component({
  selector: 'page-tempore',
  templateUrl: 'tempore.html'
})
export class TemporePage {

  constructor(public navCtrl: NavController) {
  }
  

  goToMedecin(params){
    if (!params) params = {};
    this.navCtrl.push(MedecinPage);
    this.navCtrl.setRoot(MedecinPage);
  }

  goToRendezVous(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RendezVousPage);
    this.navCtrl.setRoot(RendezVousPage);
  }

}
