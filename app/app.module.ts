import { ProductDetailPage } from './../pages/product-detail/product-detail';
import { WishListPage } from './../pages/wish-list/wish-list';

import { ProductList } from './../providers/productList';
import { Items } from './../providers/items';
import { ProductListPage } from './../pages/product-list/product-list';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Api } from '../providers/providers';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProductListPage,
    WishListPage,
    ProductDetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,     
    IonicModule.forRoot(MyApp),  
   TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],  
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProductListPage,
    WishListPage,
    ProductDetailPage
  ],
  providers: [
    StatusBar,
    Api,
    SplashScreen,
     Items,
    ProductList,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
