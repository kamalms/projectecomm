import { Item } from '../../models/item';
import { ProductList } from './../../providers/productList';
import { Api } from './../../providers/api/api';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {

  currentItems: Item[];
  row;
  images: Array<string>;  
  grid: Array<Array<string>>; //array of arrays
  
  constructor(public api: Api,public items: ProductList) {
        this.initHome().subscribe((data: any) => {
         this.row = data.result;
         }, err => {
        console.error('ERROR', err);
      },
      ()=> {
        console.log('complete');
         this.currentItems = Array.from(Array(Math.ceil(this.row.length / 2)).keys());  
      });
      
  }
  
  ionViewDidLoad() {
}
 itemSelected(item: string) {
    console.log("Selected Item", item);
  }
    public initHome() {
       let seq = this.api.get('category_products', '3');
       return seq;           
     }  
}
