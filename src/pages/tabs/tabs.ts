import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/* Tab menu Page Import*/
import { HomePage } from '../home/home'
import { CoursePage } from '../course/course'
import { ServicePage } from '../service/service'
import { ArticlePage } from '../article/article'
import { ContactPage } from '../contact/contact'

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root: any = HomePage;
  tab2Root: any = CoursePage;
  tab3Root: any = ServicePage;
  tab4Root: any = ArticlePage;
  tab5Root: any = ContactPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
