import { PhoneBookPage } from './../phone-book/phone-book';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  //property=attibiy_Java
  loginResult;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signIn(_username,_password){
  alert('Hello'+_username);
  if (_password == '1234') {
    this.loginResult = 'Pass';
    this.navCtrl.push("PhoneBookPage");
  } else {
    this.loginResult = 'Fall';
  }
  }

  
}//end
