import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

/* Side Menu Page Import */
import { SchedulePage } from '../pages/schedule/schedule'
import { PortfolioPage } from '../pages/portfolio/portfolio'
import { PaymentPage } from '../pages/payment/payment'
import { SettingPage } from '../pages/setting/setting'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{title: string, component: any, icon:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'ตารางอบรม', component: SchedulePage , icon:"calendar"},
      { title: 'ผลงานของเรา', component:  PortfolioPage, icon:"pricetag"},
      { title: 'ช่องทางชำระเงิน', component:  PaymentPage, icon:"cash"},
      { title: 'ตั้งค่าระบบ', component:  SettingPage, icon:"settings"}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.push(page.component);
  }
}
