import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DisplayProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DisplayProvider {

  constructor(public http: HttpClient) {
  }

 listDoctors(){
  	return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append("Content-Type","application/json");

       this.http.get("http://localhost:3000/doctor/list", {headers: headers, withCredentials: true})
      .subscribe(ans => {
        resolve(ans);
       }, err => {
        reject(err);
      });
      	})
}

}
