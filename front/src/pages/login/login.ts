import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MedecinPage } from '../medecin/medecin';
import { NouveauComptePage } from '../nouveau-compte/nouveau-compte';
import { RegisterApiProvider } from '../../providers/register-api/register-api';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  doctorLogin={
    "mail": "",
    "password": "",
  };

  constructor(public navCtrl: NavController, public registerApiProvider:RegisterApiProvider, public alertCtrl: AlertController) {
  }
  goToMedecin(params){
    if (!params) params = {};
    this.navCtrl.push(MedecinPage);
  }
  goToNouveauCompte(params){
    if (!params) params = {};
    this.navCtrl.push(NouveauComptePage);
  }

  login(){
    console.log(this.doctorLogin)
    this.registerApiProvider.loginDoctor(this.doctorLogin)
    .then((ans)=> {
        console.log(ans);
        let alert = this.alertCtrl.create({
        title: "Réussi",
        subTitle: ans,
        buttons: ['OK']
       });
        alert.present();   
     },
      (err) =>  {
        console.log(err);
        let alert = this.alertCtrl.create({
        title: "Erreur",
        subTitle: err.error,
        buttons: ['OK']
       });
        alert.present();   
         })
  }
}
