import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RendezVousPage } from '../pages/rendez-vous/rendez-vous';
import { NouveauMedecinPage } from '../pages/nouveau-medecin/nouveau-medecin';
import { LoginPage } from '../pages/login/login';
import { MedecinPage } from '../pages/medecin/medecin';


import { TemporePage } from '../pages/tempore/tempore';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = TemporePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToTempore(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TemporePage);
  }goToRendezVous(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RendezVousPage);
  }goToNouveauMedecin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(NouveauMedecinPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }goToMedecin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MedecinPage);
  }
}
