import { Component } from '@angular/core';
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

  constructor(public navCtrl: NavController, public registerApiProvider:RegisterApiProvider, public alertCtrl: AlertController) {
  	 this.loadInfo();
  }
  

  loadInfo(){
    this.registerApiProvider.infoDoctor()
    .then((ans)=> {
    	console.log(ans.delay)
	   this.delay = ans.delay;
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
