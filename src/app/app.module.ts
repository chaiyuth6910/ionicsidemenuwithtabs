import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

/* Tab menu Page Import*/
import { HomePage } from '../pages/home/home';
import { CoursePage } from '../pages/course/course';
import { ServicePage } from '../pages/service/service';
import { ArticlePage } from '../pages/article/article';
import { ContactPage } from '../pages/contact/contact';
import{ CoursedetailPage } from '../pages/coursedetail/coursedetail';

/* Side Menu Page Import */
import { SchedulePage } from '../pages/schedule/schedule';
import { PortfolioPage } from '../pages/portfolio/portfolio';
import { PaymentPage } from '../pages/payment/payment';
import { SettingPage } from '../pages/setting/setting';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    SchedulePage,
    PortfolioPage,
    PaymentPage,
    SettingPage,
    HomePage,
    CoursePage,
    CoursedetailPage,
    ServicePage,
    ArticlePage,
    ContactPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SchedulePage,
    PortfolioPage,
    PaymentPage,
    SettingPage,
    HomePage,
    CoursePage,
    CoursedetailPage,
    ServicePage,
    ArticlePage,
    ContactPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
