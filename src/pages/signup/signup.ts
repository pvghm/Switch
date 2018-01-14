import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
//import {WelcomePage} from "../welcome/welcome";
import {ProfilePage} from "../profile/profile";
import {Account} from "../../models/account";
import {User} from "../../providers/user/user";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  account: Account;
  // private signUpErrorString: string = "Sign up error!";
  constructor(public navCtrl: NavController, public navParams: NavParams, public user: User, public toastCtrl: ToastController) {
    this.account = {firstName: "First", lastName: "Last", email: "Test@test.com", password: "pass"};
  }

  doSignup(){
    this.navCtrl.push(ProfilePage);
    /*this.user.login(this.account).subscribe( (resp) => {

      this.navCtrl.push(ProfilePage);
    }, (err) => {
      this.navCtrl.push(WelcomePage);
      let toast = this.toastCtrl.create({
        message: this.signUpErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
