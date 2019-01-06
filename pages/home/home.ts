import { WishListPage } from './../wish-list/wish-list';
import { ProductListPage } from './../product-list/product-list';
import { Api } from './../../providers/api/api';
import { TranslateService } from '@ngx-translate/core';
// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';

// @Component({
//   selector: 'page-home',
//   templateUrl: 'home.html'
// })
// export class HomePage {
//   param = {value: 'changeinsadfj'};
//   constructor(public navCtrl: NavController) {

//   }

// }


 import { ProductDetailPage } from './../product-detail/product-detail';

 import { NguCarousel } from '@ngu/carousel';

import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';
import { Slides } from 'ionic-angular';
// import service and query
// import { Observable } from 'rxjs';
// import { Observable } from 'rxjs-compat';
// import { map } from 'rxjs-compat/operators';
export interface Slide {
  title: string;
  description: string;
  image: string;
}
 @Component({
   selector: 'page-home',
   templateUrl: 'home.html'
 })
 export class HomePage implements OnInit  {

    slides: any;
  // slides: any[];
  showSkip = true;
  dir: string = 'ltr';
  public bestSellerProducts = [];

  images = ['ica-slidebox-img-1.jpg', 'ica-slidebox-img-2.jpg', 'ica-slidebox-img-3.jpg', 'ica-slidebox-img-2.jpg'];

   @ViewChild(Slides) slides1: Slides;
    cards = {
      imageUrl: 'assets/img/card/card-saopaolo.png',
      title: 'São Paulo',
      subtitle: '41 Listings'
    };


    greeting: string;
  testSlides: string[] = [];
  _options;
  @ViewChild('mySlider') mySlider: any;

  //cat variable 
  public categories:any;
   
   constructor(public api: Api, public navCtrl: NavController,translate: TranslateService, public menu: MenuController, public platform: Platform) {
    this.dir = platform.dir();
    translate.get(["TUTORIAL_SLIDE1_TITLE",
      "TUTORIAL_SLIDE1_DESCRIPTION",
      "TUTORIAL_SLIDE2_TITLE",
      "TUTORIAL_SLIDE2_DESCRIPTION",
      "TUTORIAL_SLIDE3_TITLE",
      "TUTORIAL_SLIDE3_DESCRIPTION",
    ]).subscribe(
      (values) => {
        console.log('Loaded values', values);
        this.initHome().subscribe((data: any) => {
         console.log('HomePage Api', data);
         this.slides = data.offer;





         this.categories = data.categories;





          console.log(this.slides);


       }, err => {
        console.error('ERROR', err);
      });;
        // this.slides = [
        //   {
        //     title: values.TUTORIAL_SLIDE1_TITLE,
        //     description: values.TUTORIAL_SLIDE1_DESCRIPTION,
        //     image: 'assets/img/ica-slidebox-img-1.png',
        //   },
        //   {
        //     title: values.TUTORIAL_SLIDE2_TITLE,
        //     description: values.TUTORIAL_SLIDE2_DESCRIPTION,
        //     image: 'assets/img/ica-slidebox-img-2.png',
        //   },
        //   {
        //     title: values.TUTORIAL_SLIDE3_TITLE,
        //     description: values.TUTORIAL_SLIDE3_DESCRIPTION,
        //     image: 'assets/img/ica-slidebox-img-3.png',
        //   }
        // ];
      });

      
      
  //   this._options = {
  //       slidesPerView:3,
  //       pager: true,
  //     nextButton: ".swiper-button-next",
  //     prevButton: ".swiper-button-prev",        
  //       onInit:()=>{
  //       }
  //    }
  // setTimeout(()=>{
  //       for (var i=1; i<6; i++) {
  //           this.testSlides.push("Slide - "+i);
  //         }
  //  },100);
   this.initHome();
  }
 onSlideChangeStart(slider) {
   // this.showSkip = !slider.isEnd();
  }
  // public carouselTileItems: Array<any>;
  // public carouselTile;
   // public carouselTile: NguCarousel;

  cardTapped(card) {
    //alert(card.title + ' was tapped.');
    // this.navCtrl.push(ProductListPage);


     this.navCtrl.push(ProductDetailPage);

  }

  ngOnInit(){
 
  }
     public initHome() {
       let seq = this.api.get('homepage');
      //  seq.subscribe((data) => {
      //    console.log('HomePage Api', data);
      //  }, err => {
      //   console.error('ERROR', err);
      // });

      return seq;           
     }
}
