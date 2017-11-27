import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NouveauMedecinPage } from '../nouveau-medecin/nouveau-medecin';
import { LoginPage } from '../login/login';
import { MedecinPage } from '../medecin/medecin';
import { DisplayProvider } from '../../providers/display/display';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-rendez-vous',
  templateUrl: 'rendez-vous.html',
  providers: [DisplayProvider]
})
export class RendezVousPage {

  public doctor: any

  constructor(public navCtrl: NavController, public DisplayProvider: DisplayProvider, public alertCtrl: AlertController) {
      this.loadDoctor()
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

  loadDoctor(){
    this.DisplayProvider.listDoctor()
      .then((ans)=> {
        console.log(ans)
        this.doctor=ans
      },
      (err)=>{
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
