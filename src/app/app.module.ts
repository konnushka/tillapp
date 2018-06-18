import { NgModule, ErrorHandler} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule,AngularFireDatabase } from 'angularfire2/database';
import { SocialSharing } from '@ionic-native/social-sharing';

import { DataPage } from '../pages/data/data';
import { TillPage } from '../pages/till/till';
import { PayBossPage } from '../pages/payboss/payboss';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

var config = {
   apiKey: "AIzaSyCOtgKWXKaXl2bQiDSg6d_I_mmtGsA-ufc",
   authDomain: "tillapp-efbe3.firebaseapp.com",
   databaseURL: "https://tillapp-efbe3.firebaseio.com",
   projectId: "tillapp-efbe3",
   storageBucket: "tillapp-efbe3.appspot.com",
   messagingSenderId: "604409299966"
 };


@NgModule({
  declarations: [
    MyApp,
    DataPage,
    TillPage,
    PayBossPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DataPage,
    TillPage,
    PayBossPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {


}
