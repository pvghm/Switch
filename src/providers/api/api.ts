import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the Api provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Api {
  url: string = 'http://localhost:64535/api';
  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }
  get(endpoint: string, params?: any, options?: any){
    if (!options){
      options = {
        params: new HttpParams()
      };
    }

    if (params){
      options.params = new HttpParams();
      for (let p in params){
        options.params.set(p, params[p]);
      }
    }

    return this.http.get(this.url + '/' + endpoint, options);
  }

  post(endpoint: string, body: any, options?: any){
    console.log("Url: ", this.url, "     Endpoint: ", endpoint, "            Body: ", body, "          Options: ", options);
    return this.http.post(this.url + '/' + endpoint, body, options);
  }

  put(endpoint: string, body: any, options?: any){
    return this.http.put(this.url + '/' + endpoint, body, options);
  }

  patch(endpoint: string, body: any, options?: any){
    return this.http.put(this.url + '/' + endpoint, body, options);
  }

  delete(endpoint: string, options?: any){
    return this.http.post(this.url + '/' + endpoint, options);
  }
}
