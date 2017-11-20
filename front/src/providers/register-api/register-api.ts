import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RegisterApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegisterApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RegisterApiProvider Provider');
  }


  postDoctor(doctorData){
  	return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append("Content-Type","application/json");

      let body = {
        name: doctorData.name,
        mail: doctorData.mail,
        password: doctorData.password,
        passwordConf: doctorData.passwordConf,
        city: doctorData.city,
        tel: doctorData.tel,
        descritpion: doctorData.descritpion
      }

       this.http.post("http://localhost:3000/doctor/register", body, {headers: headers})
      .subscribe(ans => {
        resolve(ans);
       }, err => {
        reject(err);
      });
      	})
};

 loginDoctor(doctorLogin){
  	return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append("Content-Type","application/json");

      let body = {
        logmail: doctorLogin.mail,
        logpassword: doctorLogin.password
          }

       this.http.post("http://localhost:3000/doctor/login", body, {headers: headers})
      .subscribe(ans => {
        resolve(ans);
       }, err => {
        reject(err);
      });
      	})
}

}