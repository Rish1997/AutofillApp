import { TypeAheadComponent } from './../components/type-ahead/type-ahead';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
// import { CommonModule } from '@angular/common';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// import { TypeAheadComponent } from '../components/components.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

const config = {
    apiKey: "AIzaSyDk9r3p95i8dj4q1_5xDWLP958NmADtYas",
    authDomain: "securitysystem-b76c6.firebaseapp.com",
    databaseURL: "https://securitysystem-b76c6.firebaseio.com",
    projectId: "securitysystem-b76c6",
    storageBucket: "securitysystem-b76c6.appspot.com",
    messagingSenderId: "771920021862"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TypeAheadComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
