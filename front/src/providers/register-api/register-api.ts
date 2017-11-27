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
        description: doctorData.description
      }

       this.http.post("http://localhost:3000/doctor/register", body, {headers: headers, withCredentials: true})
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

       this.http.post("http://localhost:3000/doctor/login", body, {headers: headers, withCredentials: true})
      .subscribe(ans => {
        resolve(ans);
       }, err => {
        reject(err);
      });
      	})
};

 infoDoctor(){
  	return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append("Content-Type","application/json");

       this.http.get("http://localhost:3000/doctor/profile", {headers: headers, withCredentials: true})
      .subscribe(ans => {
        resolve(ans);
       }, err => {
        reject(err);
      });
      	})
}

 delay(newdelay){
  	return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append("Content-Type","application/json");

      let body = {
      	delay: newdelay
      }

       this.http.post("http://localhost:3000/doctor/profile", body, {headers: headers, withCredentials: true})
      .subscribe(ans => {
        resolve(ans);
       }, err => {
        reject(err);
      });
      	})
}

 logout(){
  	return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append("Content-Type","application/json");

       this.http.get("http://localhost:3000/doctor/logout", {headers: headers, withCredentials: true})
      .subscribe(ans => {
        resolve(ans);
       }, err => {
        reject(err);
      });
      	})
}

}