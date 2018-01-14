import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SalesPage} from "../sales/sales";
import {OrdersPage} from "../orders/orders";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profilePicture: any = "../../assets/imgs/profilePicture.png";
  noOfNewOrders: number = 5;
  totalSales: number = 500;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToOrders() {
    this.navCtrl.push(OrdersPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
