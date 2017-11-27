import { Component } from '@angular/core';
import { TemporePage } from '../tempore/tempore';
import { LoginPage } from '../login/login';
import { NavController } from 'ionic-angular';
import { RegisterApiProvider } from '../../providers/register-api/register-api';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-medecin',
  templateUrl: 'medecin.html',
  providers: [RegisterApiProvider]

})
export class MedecinPage {

  public delay: any;
  public name: any;


  constructor(public navCtrl: NavController, public registerApiProvider:RegisterApiProvider, public alertCtrl: AlertController) {
  	 this.loadInfo();
  }
  
  goToTempore(params){
    if (!params) params = {};
    this.navCtrl.push(TemporePage);
    this.navCtrl.setRoot(TemporePage);
   }

   goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }

  errNotConnected(){
  	let alert = this.alertCtrl.create({
        title: "Non connecté",
        subTitle: "Vous devez être connecté pour accéder à cette page.",
        buttons: [{
          text: 'Connexion',
          handler: () => {
          this.goToLogin();   
          }
        },{
        text: 'Annuler',
        handler: () => {
        this.goToTempore();   
          }
        }]
       });
        alert.present();
  }

  loadInfo(){
    this.registerApiProvider.infoDoctor()
    .then((ans)=> {
	   this.delay = ans.delay;
	   this.name = ans.name;
     },
      (err) =>  {
	  if (err="not connected"){
		   this.errNotConnected()
        } else {

        let alert = this.alertCtrl.create({
        title: "Erreur",
        subTitle: err.error,
        buttons: ['OK']
       });
        alert.present();   
        }
         })
  }

   modifyDelay(newdelay){
   this.registerApiProvider.delay(newdelay)
    .then((ans)=> {
	   this.loadInfo()
     },
      (err) =>  {
       if (err="not connected"){
	   this.errNotConnected()
        } else {
        console.log(err);
        let alert = this.alertCtrl.create({
        title: "Erreur",
        subTitle: err.error,
        buttons: ['OK']
       });
        alert.present();
        }   
         })
  }

  add10(){
  	console.log(this.delay+10)
  	this.modifyDelay(this.delay+10)
}

  remove10(){
  	console.log(this.delay-10)
    this.modifyDelay(this.delay-10)
}

  raz(){
  	this.modifyDelay(0)
}

  logout(){
	this.registerApiProvider.logout()
    .then((ans)=> {
        this.goToTempore();   
     },
      (err) =>  {
       if (err="not connected"){
	   this.errNotConnected()
        } else {
        console.log(err);
        let alert = this.alertCtrl.create({
        title: "Erreur",
        subTitle: err.error,
        buttons: ['OK']
       });
        alert.present();
        }   
         })
  }

}
