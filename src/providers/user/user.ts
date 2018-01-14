import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/share';
import { Injectable } from '@angular/core';
import {Api} from "../api/api";
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class User {
  _user: any;

  constructor(public api: Api) {
  }

  login(accountInfo: any){
    let request = this.api.post('Account/Login', JSON.stringify(accountInfo)).share();
    request.subscribe((res: any) => {
      if (res.status == 'success') {
        this._loggedIn(res);
      }
    }, err => {
      console.error('ERROR', err);
    });
    return request;
  }

  signup(accountInfo: any){
    let request = this.api.post('account/signup', accountInfo).share();
    request.subscribe((res: any) => {
      if (res.status == 'success'){
        this._loggedIn(res);
      }
    }, err =>{
      console.error('ERROR', err);
    });
  }

  logout(){
    this._user = null;
  }

  _loggedIn(resp){
    this._user = resp.user;
  }
}
