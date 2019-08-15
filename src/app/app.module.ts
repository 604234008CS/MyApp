import { FlashlightPage } from './../pages/flashlight/flashlight';
import { VibrationPage } from './../pages/vibration/vibration';
import BarcodeScannerPage from './../pages/barcode-scanner/barcode-scanner';
import { PhoneBookPage } from './../pages/phone-book/phone-book';
import { PhoneBookDetailPage } from './../pages/phone-book-detail/phone-book-detail';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SMS } from '@ionic-native/sms/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Vibration } from '@ionic-native/vibration';
import { BatteryStatus } from '@ionic-native/battery-status';
import { Flashlight } from '@ionic-native/flashlight';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    BarcodeScannerPage,
    VibrationPage,
    FlashlightPage,
    
  
    

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    BarcodeScannerPage,
    VibrationPage,
    FlashlightPage
    
    
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,SMS,BarcodeScanner,Vibration,Flashlight,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}
