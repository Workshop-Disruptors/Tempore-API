import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TemporePage } from '../pages/tempore/tempore';
import { RendezVousPage } from '../pages/rendez-vous/rendez-vous';
import { MedecinPage } from '../pages/medecin/medecin';
import { LoginPage } from '../pages/login/login';
import { NouveauComptePage } from '../pages/nouveau-compte/nouveau-compte';
import { MesInformationsPage } from '../pages/mes-informations/mes-informations';
import { NouveauMedecinPage } from '../pages/nouveau-medecin/nouveau-medecin';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TemporePage,
    RendezVousPage,
    MedecinPage,
    LoginPage,
    NouveauComptePage,
    MesInformationsPage,
    NouveauMedecinPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TemporePage,
    RendezVousPage,
    MedecinPage,
    LoginPage,
    NouveauComptePage,
    MesInformationsPage,
    NouveauMedecinPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}