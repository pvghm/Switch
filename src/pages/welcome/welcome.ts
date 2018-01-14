import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Account} from "../../models/account";
import {User} from '../../providers/user/user';
import {ProfilePage} from "../profile/profile";
import {SignupPage} from "../signup/signup";
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  account: Account;

  private loginErrorString: string = "Login error!";

  constructor(public navCtrl: NavController, public navParams: NavParams, public  user: User, public toastCtrl: ToastController, public http: HttpClient) {
    this.account = {firstName: "First", lastName: "Last", email: 'Test@Test.com', password: 'pass'};
  }


  doLogin(){
    this.http.post("http://localhost:64535/api/Account", {
      firstName: "Test",
      lastName: "Last",
      email: "email@e.com",
      password: "pass"
    }).subscribe((res: any) => {
      console.log("Res: ", res);
    }, err => {
      console.log("Error: ", err);
    });
    /*this.user.login(this.account).subscribe( (resp) => {
      this.navCtrl.push(ProfilePage);
    }, (err) => {
      this.navCtrl.push(WelcomePage);
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });*/
  }

  signup(){
    this.navCtrl.push(SignupPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}
