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
  public name: any;


  constructor(public navCtrl: NavController, public registerApiProvider:RegisterApiProvider, public alertCtrl: AlertController) {
  	 this.loadInfo();
  }
  

  loadInfo(){
    this.registerApiProvider.infoDoctor()
    .then((ans)=> {
    	console.log(ans.delay)
	   this.delay = ans.delay;
	   this.name = ans.name;
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

   modifyDelay(newdelay){
   console.log("modifyDelay", newdelay)

   this.registerApiProvider.delay(newdelay)
    .then((ans)=> {
	   this.loadInfo()
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
}
