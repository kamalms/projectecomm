import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  url: string = 'http://localhost/newversion/thirubuvanamsliksarees/rest/api.php?action=';

  constructor(public http: HttpClient) {
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    // if (!reqOpts) {
    //   reqOpts = {
    //     params: new HttpParams()
    //   };
    // }
     console.log('params', params);
    // // Support easy query params for GET requests
    // if (params) {
    //   reqOpts.params = new HttpParams();
    //   for (let k in params) {
    //     reqOpts.params.set(k, params[k]);
    //   }
    // }

    //   console.log('reqOpts', reqOpts);
    if(params == undefined) {
      params ='test';
    }
     let test = new HttpParams();


    // Begin assigning parameters
    params = test.append('category_id', params);

    return this.http.get(this.url  + endpoint, { params: params});
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }
}
