import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';

import {WelcomePage} from "../pages/welcome/welcome";
import {Api} from '../providers/api/api';
import {Orders} from '../providers/orders/orders';
import {User} from '../providers/user/user';
import {HttpClientModule} from "@angular/common/http";
import {SignupPageModule} from "../pages/signup/signup.module";
import {ProfilePageModule} from "../pages/profile/profile.module";
import {SalesPageModule} from "../pages/sales/sales.module";
import {OrdersPageModule} from "../pages/orders/orders.module";

@NgModule({
  declarations: [
    MyApp,
    WelcomePage
  ],
  imports: [
    HttpClientModule,
    SignupPageModule,
    ProfilePageModule,
    SalesPageModule,
    OrdersPageModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Api,
    Orders,
    User
  ]
})
export class AppModule {}
