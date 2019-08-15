import { Vibration } from '@ionic-native/vibration';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-vibration',
  templateUrl: 'vibration.html',
})
export class VibrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private vibration: Vibration) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VibrationPage');
  }

  vibrate(){
    this.vibration.vibrate(1000);
    
  }

}
