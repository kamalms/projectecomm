import { Api } from './api/api';
import { Injectable } from '@angular/core';

import { Item } from './../models/item';

@Injectable()
export class ProductList {
  productList: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor(public api: Api) {

 console.log('provides construcgor');
   

   
  }
   public initHome() {
       let seq = this.api.get('category_products', '3');
     return seq;           
     }  

  query(params?: any) {


    console.log('query function', params);
    this.initHome().subscribe((data: any) => {
         console.log('provides Api', data);
        return this.productList = data.result;
         }, err => {
        console.error('ERROR', err);
      },
      
      ()=> {
        console.log('complete');

      });
    // if (!params) {
    //   return this.productList;
    // } 
    // else {
    //   console.log('qu;ery', params);
    // //   for (let item of params) {
    // //     console.log('item', params);

    // //   this.productList.push(new Item(item));
    // // }
    //  // this.productList = params.result;
    // }



    return this.productList.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.productList.push(item);
  }

  delete(item: Item) {
    this.productList.splice(this.productList.indexOf(item), 1);
  }
}
